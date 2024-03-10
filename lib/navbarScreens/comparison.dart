import 'package:flutter/material.dart';
import 'package:gg/afterloginscreens/productdetailspage.dart';
import '../navigationbar/navigation.dart';

class Comparison extends StatefulWidget {
  const Comparison({super.key});

  @override
  State<Comparison> createState() => _ComparisonState();
}

class _ComparisonState extends State<Comparison> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Comparison'),
      ),
      // body: ProductDetails(product: null,),
      bottomNavigationBar: navigationBar(),
    );
  }
}
