import 'package:flutter/material.dart';
import '../afterloginscreens/home.dart';
import 'SignIn.dart';
import 'auth.dart';
import 'package:firebase_auth/firebase_auth.dart';


class SignUp extends StatefulWidget {
  const SignUp({super.key});

  @override
  State<SignUp> createState() => _SignUpState();
}

class _SignUpState extends State<SignUp> {
  String errormsg = '';
  TextEditingController eCtrl1 = TextEditingController();
  TextEditingController eCtrl2 = TextEditingController();

  Future<void> createUserWithEmailAndPassword () async {
    try{
      await Auth().createUserWithEmailAndPassword(email: eCtrl1.text, password: eCtrl2.text);
      Navigator.pushReplacement(
        context,
        MaterialPageRoute(
          builder: (context) => Home(),
        ),
      );
    } on FirebaseAuthException catch (e) {
      setState(() {
        errormsg = e.message!;
        eCtrl1.text = "";
        eCtrl2.text = "";
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    return Scaffold(
      backgroundColor: Colors.transparent,
      body: Stack(
        children: [
          Positioned(top:0,
            left:0,
            height: 500,
            width: size.width,
            child: Image.asset('images/login.png',
              fit: BoxFit.cover,),),
          Positioned(
              bottom: 0,
              child: SizedBox(
                width: size.width,
                child: Card(
                  shape: const RoundedRectangleBorder(
                      borderRadius: BorderRadius.only(
                          topRight: Radius.circular(25),
                          topLeft: Radius.circular(25)
                      )
                  ),
                  child: Padding(
                    padding: const EdgeInsets.all(30.0),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text('Swaggy',style: TextStyle(color: Theme.of(context).primaryColor,fontSize: 40,fontWeight: FontWeight.bold),),
                        const SizedBox(height: 40,),
                        Text('Email address',style: TextStyle(color: Colors.black.withOpacity(0.8),fontSize: 18),),
                        const SizedBox(height: 15,),
                        TextField(
                          controller: eCtrl1,
                          decoration: InputDecoration(
                            prefixIcon: Icon(Icons.mail_outline),
                            hintText: 'Enter email',
                            hintStyle: TextStyle(
                                color: Colors.grey.withOpacity(0.5)
                            ),
                          ),
                        ),
                        const SizedBox(height: 20,),
                        Text('Password',style: TextStyle(color: Colors.black.withOpacity(0.8),fontSize: 18),),
                        const SizedBox(height: 20,),
                        TextField(
                          controller: eCtrl2,
                          decoration: InputDecoration(
                            prefixIcon: const Icon(Icons.lock_outline),
                            hintText: 'Enter password',
                            hintStyle: TextStyle(
                                color: Colors.grey.withOpacity(0.5)
                            ),
                          ),
                        ),
                        const SizedBox(height: 60,),
                        ElevatedButton(
                          style: ElevatedButton.styleFrom(
                            backgroundColor: Theme.of(context).primaryColor,
                            elevation: 15,
                            shape: const StadiumBorder(),
                            minimumSize: const Size.fromHeight(60),
                            shadowColor:const Color.fromRGBO(2, 25, 69, 0),
                          ),
                          onPressed: createUserWithEmailAndPassword,
                          child:const Text('Create my account',
                              style: TextStyle(
                                  color: Colors.white)
                          ),
                        ),
                        const SizedBox(height: 20,),

                        Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: [
                             const Text('Already have an account ?'),
                            TextButton(onPressed: (){
                              Navigator.pushReplacement(context, MaterialPageRoute(builder: (context) => const LoginPage()));
                            },
                                child:  Text('Sign IN',
                                  style: TextStyle(
                                      color: Theme.of(context).primaryColor
                                  ),))
                          ],
                        )
                      ],
                    ),
                  ),
                ),
              ))
        ],
      ),
    );

  }
}

class User {
  final String email;
  final String pass;
  String id;

  User({
    this.id = '',
    required this.email,
    required this.pass
  });

  Map<String,dynamic> toJson() => {
    'id':id,
    'email':email,
    'pass': pass,
  };

  static User fromJson(Map<String,dynamic> json) => User(
      id: json['id'],
      email: json['email'],
      pass: json['pass']
  );
}
