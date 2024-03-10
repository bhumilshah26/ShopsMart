// ignore_for_file: must_be_immutable
import 'package:gg/navbarScreens/comparison.dart';
import 'package:iconly/iconly.dart';
import 'package:flutter/material.dart';
import '../afterloginscreens/home.dart';
import '../afterloginscreens/profile.dart';
import '../navbarScreens/Offers.dart';
import '../navbarScreens/saved.dart';
import 'Colors.dart';

class navigationBar extends StatefulWidget {

  navigationBar({super.key});

  @override
  State<navigationBar> createState() => _navigationBarState();
}

class _navigationBarState extends State<navigationBar> {
  int _currenIndex = 0;

  Constants myconstants = Constants();

  int count = 0;

  @override
  Widget build(BuildContext context) {
    return BottomNavigationBar(
      currentIndex: _currenIndex,
      // fixedColor: primary,
      backgroundColor: Colors.white,
      elevation: 0,
      selectedItemColor: Colors.deepOrange,
      onTap: (int index) {
        if (index == 0) {
          setState(() {
            _currenIndex = index;
          });
          Navigator.pushReplacement(context,
              MaterialPageRoute(builder: (context) => const Home()));
        } else if (index == 1) {
          setState(() {
            _currenIndex = index;
          });
            Navigator.pushReplacement(context,
                MaterialPageRoute(builder: (context) => const Comparison()));
        } else if (index == 2) {

          Navigator.pushReplacement(context,
              MaterialPageRoute(builder: (context) => const Offers()));
          setState(() {
            _currenIndex = index;
          });
        } else if (index == 3) {

          Navigator.pushReplacement(context,
              MaterialPageRoute(builder: (context) => const Saved()));
          setState(() {
            _currenIndex = index;
          });
        } else if (index == 4) {

          Navigator.pushReplacement(context,
              MaterialPageRoute(builder: (context) => const Profile()));
          setState(() {
            _currenIndex = index;
          });
        }
      },
      unselectedItemColor: SecondaryText,
      items: items,
      type: BottomNavigationBarType.fixed,
    );
  }

  // list of items
  List<BottomNavigationBarItem> items = const [
    BottomNavigationBarItem(
      icon: Icon(IconlyBold.home),
      label: "Home",
    ),
    BottomNavigationBarItem(
      icon: Icon(IconlyBold.edit),
      label: "Comparison",
    ),
    BottomNavigationBarItem(
      icon: Icon(
        IconlyBold.scan,
      ),
      label: "Offers",
    ),
    BottomNavigationBarItem(
      icon: Icon(IconlyBold.notification),
      label: "Saved",
    ),
    BottomNavigationBarItem(
      icon: Icon(IconlyBold.profile),
      label: "Profile",
    ),
  ];
}

