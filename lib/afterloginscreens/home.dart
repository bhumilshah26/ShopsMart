import 'package:flutter/material.dart';
import 'package:gg/afterloginscreens/aftersearchlist.dart';
import 'package:gg/navigationbar/navigation.dart';
import 'productdetailspage.dart';
class Home extends StatelessWidget {
  const Home({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: MyScrollableContent(),
      bottomNavigationBar: navigationBar(),
    );
  }
}

class MyScrollableContent extends StatefulWidget {
  @override
  State<MyScrollableContent> createState() => _MyScrollableContentState();
}

class _MyScrollableContentState extends State<MyScrollableContent> {
  final TextEditingController _controller = TextEditingController();

  int currentIndex = 0;
  ProductDetailsState pdetails = ProductDetailsState();
  final PageController _pcontroller = PageController(initialPage: 0);

  @override
  Widget build(BuildContext context) {
    final List<Product> products = [
      Product(name: 'Product 1', imageUrl: 'ditem1.png', price: 19.99),
      Product(name: 'Product 2', imageUrl: 'ditem2.png', price: 29.99),
      Product(name: 'Product 3', imageUrl: 'ditem3.png', price: 39.99),
    ];
    return SingleChildScrollView(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const SizedBox(height: 40,),
          Container(
            height: 75,
            color: Colors.white,
            child: Stack(
                  children: [
                    Positioned(
                      top: 40.0,
                      left: 20.0,
                      right: 20.0,
                      height: 40.0,
                      child: TextField(
                        controller: _controller,
                        onSubmitted: (String a) async {
                          var product = await pdetails.fetchData(_controller.text);
                          Navigator.push(context, MaterialPageRoute(builder: (context) =>  AfterSearchList(product2:product,)));
                          print('hey${product}');
                        },
                        decoration: InputDecoration(
                          hintText: 'Search an item',
                          filled: true,
                          fillColor: Colors.white,
                          hintStyle: const TextStyle(
                            color: Colors.grey,
                          ),

                          suffixIcon: IconButton(
                            icon: const Icon(Icons.clear),
                            onPressed: () {
                              _controller.clear();
                            },
                          ),
                          border: OutlineInputBorder(
                            borderRadius: BorderRadius.circular(8.0),
                            borderSide: BorderSide.none,
                          ),
                        ),
                      ),
                    ),
                  ],
            ),
          ),
          SizedBox(
            height: MediaQuery.of(context).size.height*0.25,
            width: MediaQuery.of(context).size.width,

            child:  Column(
              children: [
                Expanded(
                  child: PageView.builder(
                    controller: _pcontroller,
                    itemCount: contents.length,
                    onPageChanged: (int index) {
                      setState(() {
                        currentIndex = index;
                      });
                    },
                    itemBuilder: (_, i) {
                      return SizedBox(
                        height: 190,
                        width: MediaQuery.of(context).size.width,
                        child: Stack(
                          children: [
                            Positioned(
                              top:30,
                              child: Image.asset(
                                contents[i].image,
                                fit: BoxFit.contain,
                                height: 190,
                                width: MediaQuery.of(context).size.width,
                              ),
                            ),
                          ],
                        ),
                      );
                    },
                  ),
                ),
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: List.generate(
                    contents.length,
                        (index) => buildDot(index, context),
                  ),
                ),
              ],
            ),
          ),
          const SizedBox(height: 15,),
          SizedBox(
            height: 150,
            width: MediaQuery.of(context).size.width,
            child: Stack(
              children: [
                Positioned(
                  child: Image.asset("images/ditem2.png",
                  width: MediaQuery.of(context).size.width,
                  fit: BoxFit.cover,
                  ),
                ),
                const Positioned(
                    top: 110,
                    left:10,
                    child: Text('New & Featured',
                    style: TextStyle(
                      fontSize: 20,
                      fontWeight: FontWeight.bold,
                      color: Colors.white
                    ),))
              ]
            ),
          ),
          const SizedBox(height: 5,),
          SizedBox(
            height: 150,
            width: MediaQuery.of(context).size.width,
            child: Stack(
                children: [
                  Positioned(
                    child: Image.asset("images/ditem2.png",
                      width: MediaQuery.of(context).size.width,
                      fit: BoxFit.cover,
                    ),
                  ),
                  const Positioned(
                      top: 110,
                      left:10,
                      child: Text('Shoes',
                        style: TextStyle(
                            fontSize: 20,
                            fontWeight: FontWeight.bold,
                            color: Colors.white
                        ),))
                ]
            ),
          ),
          const SizedBox(height: 5,),
          SizedBox(
            height: 150,
            width: MediaQuery.of(context).size.width,
            child: Stack(
                children: [
                  Positioned(
                    child: Image.asset("images/ditem2.png",
                      width: MediaQuery.of(context).size.width,
                      fit: BoxFit.cover,
                    ),
                  ),
                  const Positioned(
                      top: 110,
                      left:10,
                      child: Text('Clothing',
                        style: TextStyle(
                            fontSize: 20,
                            fontWeight: FontWeight.bold,
                            color: Colors.white
                        ),))
                ]
            ),
          ),
          const SizedBox(height: 5,),
          SizedBox(
            height: 150,
            width: MediaQuery.of(context).size.width,
            child: Stack(
                children: [
                  Positioned(
                    child: Image.asset("images/ditem2.png",
                      width: MediaQuery.of(context).size.width,
                      fit: BoxFit.cover,
                    ),
                  ),
                  const Positioned(
                      top: 110,
                      left:10,
                      child: Text('Accessories',
                        style: TextStyle(
                            fontSize: 20,
                            fontWeight: FontWeight.bold,
                            color: Colors.white
                        ),))
                ]
            ),
          ),
          const SizedBox(height: 25,),
          const Text('  Recents',
          style: TextStyle(
            fontSize: 25,
            color: Colors.black,
            fontWeight: FontWeight.bold
          ),),
          SizedBox(height: 200,
            child: ListView.builder(
              scrollDirection: Axis.horizontal,
              itemCount: products.length,
              itemBuilder: (context, index) {
                return ProductCard(product: products[index]);
              },
            ),
          )
        ],
      ),
    );
  }

  Container buildDot(int index, BuildContext context) {
    return Container(
      height: 3,
      width: currentIndex == index ? 25 : 10,
      margin: const EdgeInsets.only(right: 5),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(20),
        color: Colors.deepOrange,
      ),
    );
  }
}

class discountitems {
  String image;
  discountitems({required this.image});
}

List<discountitems> contents = [
  discountitems(
      image: 'images/ditem1.png',
  ),
  discountitems(
      image: 'images/ditem2.png',
  ),
  discountitems(
      image: 'images/ditem3.png',
  ),
  discountitems(
    image: 'images/ditem1.png',
  ),
  discountitems(
    image: 'images/ditem2.png',
  ),
  discountitems(
    image: 'images/ditem3.png',
  ),
  discountitems(
    image: 'images/ditem1.png',
  ),
  discountitems(
    image: 'images/ditem2.png',
  ),
  discountitems(
    image: 'images/ditem3.png',
  )
];

class CustomImageBanner extends StatelessWidget {
  final String imagePath;
  final String bannerText;

  CustomImageBanner({required this.imagePath, required this.bannerText});

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: 20,
      child: SizedBox(
        height: 150,
        width: MediaQuery.of(context).size.width,
        child: Stack(
          children: [
            Positioned(
              child: Image.asset(
                imagePath,
                width: MediaQuery.of(context).size.width,
                fit: BoxFit.cover,
              ),
            ),
            Positioned(
              top: 110,
              left: 10,
              child: Text(
                bannerText,
                style: const TextStyle(
                  fontSize: 20,
                  fontWeight: FontWeight.bold,
                  color: Colors.white,
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class Product {
  final String name;
  final String imageUrl;
  final double price;

  Product({required this.name, required this.imageUrl, required this.price});

}

class ProductCard extends StatelessWidget {
  final Product product;

  ProductCard({required this.product});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 150.0,
      margin: const EdgeInsets.all(8.0),
      child: GestureDetector(
        onTap: (){
          Navigator.push(context, MaterialPageRoute(builder: (context) => ProductDetails(product: product)));
        },
        child: Card(
          elevation: 4.0,
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              ClipRRect(
                borderRadius: const BorderRadius.vertical(top: Radius.circular(4.0)),
                child: Image.asset(
                  'images/${product.imageUrl}',
                  height: 100.0, // Adjust the height based on your design
                  width: double.infinity,
                  fit: BoxFit.cover,
                ),
              ),
              Padding(
                padding: const EdgeInsets.all(8.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      product.name,
                      style: const TextStyle(
                        fontSize: 16.0,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    const SizedBox(height: 4.0),
                    Text(
                      '\$${product.price.toString()}',
                      style: const TextStyle(
                        fontSize: 14.0,
                        color: Colors.green,
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}