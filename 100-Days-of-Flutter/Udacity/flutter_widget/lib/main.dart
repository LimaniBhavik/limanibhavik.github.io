import 'package:flutter/material.dart';

// create widget for icon and text in the row

void main() {
  runApp(
    MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        appBar: AppBar(
          title: Text('Hello Rect!'),
        ),
        body: HelloWidget(),
      ),
    ),
  );
}

class HelloWidget extends StatelessWidget {
  get color => null;

  @override
  // widget create
  Widget build(BuildContext context) {
    assert(debugCheckHasMaterial(context));
    var iconLocation;
    var name='hello';
    var _rowHeight;
    var _borderRadius;
    return Material(
      color: Colors.transparent,
      child: Container(
        height: _rowHeight,
        child: InkWell(
          borderRadius: _borderRadius,
          highlightColor: color[50],
          splashColor: color[100],

          onTap: (){
            print('I waa tapped!');
          },
          child: Padding(
            padding: EdgeInsets.all(16.0),
            child: Row(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: <Widget>[
                Padding(
                    padding: EdgeInsets.only(right: 16.0),
                    child: iconLocation != null ? Icon(Icons.cake),
                ),
                Center(
                  child: Text(
                    name,
                    textAlign: TextAlign.center,
                    style: Theme.of(context).textTheme.display1,
                  ),
                )
              ],
            ),
          ),

        ),
      ),
    );
  }
}
