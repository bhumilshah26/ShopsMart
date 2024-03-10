import 'package:flutter/material.dart';
import 'package:gg/navigationbar/navigation.dart';

class Saved extends StatefulWidget {
  const Saved({super.key});

  @override
  State<Saved> createState() => _SavedState();
}

class _SavedState extends State<Saved> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Saved'),
      ),
      bottomNavigationBar: navigationBar(),
    );
  }
}
