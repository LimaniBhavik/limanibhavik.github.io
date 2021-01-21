import 'package:flutter/material.dart';

class HelloRact extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Center(
      child: Container(
        color: Colors.greenAccent,
        height: 400,
        width: 300,
        child: Center(
          child: Text(
            'Hello',
            style: TextStyle(fontSize: 40.0),
          ),
        ),
      ),
    );
  }
}

void main() {
  runApp(
    MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        appBar: AppBar(
          title: Text('Hello Rect!'),
        ),
        body: HelloRact(),
      ),
    ),
  );
}
