import 'dart:async';
import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';
import '../afterloginscreens/home.dart';
import 'onboarding.dart';

class SplashScreen extends StatefulWidget {
  const SplashScreen({super.key});
  @override
  SplashScreenState createState() => SplashScreenState();
}

class SplashScreenState extends State<SplashScreen> {

  static const String KEYLOGIN = 'Login';
  @override
  void initState() {
    super.initState();
    where();
  }

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    return Scaffold(
      backgroundColor: Colors.blue,
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Image.asset('images/appstore.png',
              height: size.height,
              width: size.width,
              fit: BoxFit.cover,)
          ],
        ),
      ),
    );
  }

  Future<void> where() async{

    var sharedPref = await SharedPreferences.getInstance();
    var isLoggedIn = sharedPref.getBool(KEYLOGIN);
    Timer(const Duration(seconds: 2), () {
      if(isLoggedIn != null){
        if(isLoggedIn){
          Navigator.of(context).pushReplacement(
            MaterialPageRoute(builder: (context) => Home()),
          );
        }
        else {
          Navigator.of(context).pushReplacement(
            MaterialPageRoute(builder: (context) => Onbording()),
          );
        }
      }
      else {
        Navigator.of(context).pushReplacement(
          MaterialPageRoute(builder: (context) => Onbording()),
        );
      }
    });
  }
}
