
import 'package:flutter/material.dart';
import 'home.dart';
import 'productdetailspage.dart';

class AfterSearchList extends StatefulWidget {
  final Product product2;
  const AfterSearchList({required this.product2, Key? key}) : super(key: key);

  @override
  State<AfterSearchList> createState() => _AfterSearchListState();
}

class _AfterSearchListState extends State<AfterSearchList> {
  bool _isLoading = true; // Flag to indicate data fetching state
  List<Product>topProducts = [];
  @override
  void initState() {
    super.initState();
    topProducts.add(widget.product2);
    setState(() {
      _isLoading = false;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Top Products'),
        centerTitle: true,
      ),
      body: _isLoading
          ? const Center(child: CircularProgressIndicator()) // Display loading indicator
          : SingleChildScrollView(
        scrollDirection: Axis.vertical,
        child: ListView.builder(
          itemCount: topProducts.length??0, // Use the length of your product list
          itemBuilder: (context, index) {
            final product = topProducts[index]; // Access each product from the list
            return Padding(
              padding: const EdgeInsets.all(10.0),
              child: Card(
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(10),
                ),
                elevation: 4, // Adjust elevation based on your design
                child: InkWell(
                  borderRadius: BorderRadius.circular(10),
                  onTap: () {
                    Navigator.push(
                      context,
                      MaterialPageRoute(
                        builder: (context) => ProductDetails(product: product,),
                      ),
                    );
                  },
                  child: Padding(
                    padding: const EdgeInsets.all(6.0),
                    child: ListTile(
                      contentPadding: const EdgeInsets.all(10),
                      leading: Container(
                        width: 100,
                        height: 200, // Adjust the height based on your design
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(10),
                          image: DecorationImage(
                            image: AssetImage(product.imageUrl),
                            fit: BoxFit.cover,
                          ),
                        ),
                      ),
                      title: Text(product.name),
                      subtitle: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text('Price: \$${product.price.toString()}'),
                        ],
                      ),
                    ),
                  ),
                ),
              ),
            );
          },
        ),
      ),
    );
  }
}

