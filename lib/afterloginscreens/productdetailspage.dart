import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import '../image_picker/image_picker.dart';
import 'home.dart';

dynamic name, price, ratings, imagelnk;

class ProductDetails extends StatefulWidget {
  final Product product;

  const ProductDetails({Key? key, required this.product}) : super(key: key);

  @override
  State<ProductDetails> createState() => ProductDetailsState();
}

class ProductDetailsState extends State<ProductDetails> {
  @override
  void initState() {
    super.initState();

  }

  fetchData(String pvalue) async {
    final Uri uri = Uri.https(
      '6419-2401-4900-56ef-d1f0-684c-69a2-3a3e-938f.ngrok-free.app',
      '/get_products').replace(queryParameters: {'product_name': pvalue});

    final response = await http.get(uri);

    if (response.statusCode == 200) {
      Map<String, dynamic> jsonResponse = json.decode(response.body);
  return jsonResponse;
    } else {
      return;
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Item Details'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.start,
          children: [
            const SizedBox(height: 10),
            Image.asset(
              'images/${widget.product.imageUrl}',
              height: 250.0,
              width: MediaQuery.of(context).size.width,
              fit: BoxFit.cover,
            ),
            const SizedBox(height: 20,),
            Text(
              '${widget.product.name}',
              style: const TextStyle(fontSize: 30),
            ),
            const SizedBox(height: 10),
            Text(
              'Price: \$${widget.product.price.toString()}',
              style: const TextStyle(fontSize: 18),
            ),

          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        child: const Text('3D model',
          textAlign: TextAlign.center,
          style: TextStyle(
              fontWeight: FontWeight.bold
          ),),

        onPressed: () {
          Navigator.pushReplacement(context, MaterialPageRoute(builder: (context) => const PickImage()));
        },
      ),
    );
  }
}

