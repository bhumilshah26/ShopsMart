import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:gg/loginScreens/signUp.dart';
import 'package:shared_preferences/shared_preferences.dart';
import '../afterloginscreens/home.dart';
import '../intro_onboardingscreens/splashScreen.dart';
import 'auth.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:fluttertoast/fluttertoast.dart';
import 'package:local_auth/local_auth.dart';


class LoginPage extends StatefulWidget {
  const LoginPage({super.key});

  @override
  State<LoginPage> createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  String errormsg = '';
  bool isLogin = false;

  late final LocalAuthentication auth;
  bool _supportState = false;

  @override
  void initState() {
      super.initState();
      auth = LocalAuthentication();
      auth.isDeviceSupported().then((bool isSupported) =>
        setState((){
          _supportState = isSupported;
        })
      );
  }

  final TextEditingController eCtrl1 = TextEditingController();
  final TextEditingController eCtrl2 = TextEditingController();

  final user = Auth().currentUser;

  Future<void> signInWithEmailAndPassword() async {
    var sharedPref = await SharedPreferences.getInstance();
    try {
      await Auth().signInWithEmailAndPassword(email: eCtrl1.text, password: eCtrl2.text);
      sharedPref.setBool(SplashScreenState.KEYLOGIN, true);
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

      Fluttertoast.showToast(
        msg: "Incorrect email or password",
        toastLength: Toast.LENGTH_SHORT,
        gravity: ToastGravity.BOTTOM,
        timeInSecForIosWeb: 1,
        backgroundColor: Colors.red,
        textColor: Colors.white,
        fontSize: 16.0,
      );
    }
  }


  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    return Scaffold(
      backgroundColor: Colors.transparent,
      body: Stack(
        children: [
          Positioned(
            top:0,
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
                    padding: const EdgeInsets.all(25.0),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text('Swaggy',style: TextStyle(color: Theme.of(context).primaryColor,fontSize: 40,fontWeight: FontWeight.bold),),
                        const SizedBox(height: 40,),
                        Text('Email address',style: TextStyle(color: Colors.black.withOpacity(0.8),fontSize: 18),),
                        const SizedBox(height: 10,),
                        TextField(
                          controller: eCtrl1,
                          decoration: InputDecoration(
                            prefixIcon: const Icon(Icons.person_2_outlined),
                            hintText: 'Enter email',
                            hintStyle: TextStyle(
                                color: Colors.grey.withOpacity(0.5)
                            ),
                          ),
                        ),
                        const SizedBox(height: 15,),
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
                        ),                          const Row(
                          mainAxisAlignment: MainAxisAlignment.start,
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            SizedBox(height: 20,),
                          ],
                        ),
                        ElevatedButton(
                          style: ElevatedButton.styleFrom(
                            backgroundColor: Theme.of(context).primaryColor,
                            elevation: 15,
                            shape: const StadiumBorder(),
                            minimumSize: const Size.fromHeight(60),
                            shadowColor:const Color.fromRGBO(2, 25, 69, 0),
                          ),
                          onPressed:signInWithEmailAndPassword,
                          child:const Text('Login',
                              style: TextStyle(
                                  color: Colors.white)
                          ),
                        ),
                        TextButton(onPressed: (){},
                          child: Center(
                            child: Text('Forgot Password ?',
                              style: TextStyle(
                                  color: Theme.of(context).primaryColor
                              ),
                            ),
                          ),),
                        Row(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            const Text("Don't have account ?"),
                            TextButton(onPressed: (){
                              Navigator.pushReplacement(context, MaterialPageRoute(builder: (context) => const SignUp()));
                            },
                                child: Text('Sign UP',
                                  style: TextStyle(
                                      color: Theme.of(context).primaryColor
                                  ),))
                          ],
                        ),
                        Row(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            const Text('OR',
                            style: TextStyle(
                              fontSize: 20
                            ),),
                            const SizedBox(width: 30,),
                            ElevatedButton(style: ElevatedButton.styleFrom(
                              backgroundColor: Theme.of(context).primaryColor,
                              elevation: 15,
                              shape: const StadiumBorder(),
                              padding: const EdgeInsets.all(15.0),
                              shadowColor:const Color.fromRGBO(2, 25, 69, 0),
                            ),
                                
                                onPressed: _authenticate, child: const Text('Use fingerprint')),
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


  Future<void> _authenticate() async {
    var sharedPref = await SharedPreferences.getInstance();
    try {
  bool authenticated = await auth.authenticate(localizedReason: 'To get more discounts!',
  options: const AuthenticationOptions(
    stickyAuth: true,
    biometricOnly: true,
  ));
  if (authenticated) {
    sharedPref.setBool(SplashScreenState.KEYLOGIN, true);
    Navigator.pushReplacement(
      context,
      MaterialPageRoute(
        builder: (context) => Home(),
      ),
    );
  }
    } on PlatformException catch (e) {
      print(e);
    }

  }
}