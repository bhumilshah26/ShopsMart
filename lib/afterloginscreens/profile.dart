import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';

import '../intro_onboardingscreens/splashScreen.dart';

class Profile extends StatefulWidget {
  const Profile({super.key});

  @override
  State<Profile> createState() => _ProfileState();
}

class _ProfileState extends State<Profile> {
  Future<void> signOut() async {
    try {
      await FirebaseAuth.instance.signOut();
      // ignore: use_build_context_synchronously
      Navigator.pushReplacement(
        context,
        MaterialPageRoute(
          builder: (context) => const SplashScreen(),
        ),
      );
    // ignore: empty_catches
    } catch (e) {
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Your Profile'),
        centerTitle: true,
        backgroundColor: const Color.fromRGBO(2, 28, 77, 1.0),
      ),
      body: Padding(
        padding: const EdgeInsets.all(12.0),
        child: Column(
          children: [
            Row(
              children: [
                ClipOval(
                  child: Image.asset('images/prof.png',
                    height: 50,
                    width: 55,
                    fit: BoxFit.cover,),
                ),
                const SizedBox(width: 20,),
                const Text('Lucifer')
              ],
            ),
            const SizedBox(height: 30,),
            Column(
              children: [
                const Tabs(tabname: 'My Account'),
                const SizedBox(height: 50,),
                const Tabs(tabname: 'Payments & Refunds'),
                const SizedBox(height: 50,),
                const Tabs(tabname: 'Help & Support'),
                const SizedBox(height: 50,),
                const Tabs(tabname: 'Privacy Policy'),
                const SizedBox(height: 290,),
                TextButton(
                    onPressed: signOut, child: const Text('Logout',style: TextStyle(color: Colors.black),))
              ],
            )
          ],
        ),
      ),
    );
  }
}

class Tabs extends StatelessWidget {
  final String tabname;
  const Tabs({super.key, required this.tabname});

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        Text(tabname),
        const Icon(Icons.arrow_right_sharp,color:Colors.grey,)
      ],
    );
  }
}

