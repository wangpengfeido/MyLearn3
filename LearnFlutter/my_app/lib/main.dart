import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'abaFirstApp/aba/firstAppAba.dart';
import 'abaFirstApp/aca/firstAppAca.dart';
import 'abaFirstApp/ada/firstAppAda.dart';
import 'abaFirstApp/aea/firstAppAea.dart';
import 'abaFirstApp/afa/firstAppAfa.dart';
import 'abaFirstApp/aga/firstAppAga.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return new MaterialApp(
      home: Scaffold(
        body: Home(),
      ),
    );
  }
}

class Home extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return new ListView(
      children: <Widget>[
        Container(child: Text('第一个Flutter应用')),
        createRouteButton(context, 'aba', (context) => FirstAppAba()),
        createRouteButton(context, 'aca', (context) => FirstAppAca()),
        createRouteButton(context, 'ada', (context) => FirstAppAda()),
        createRouteButton(context, 'aea', (context) => FirstAppAea()),
        createRouteButton(context, 'afa', (context) => FirstAppAfa()),
        createRouteButton(context, 'aga', (context) => FirstAppAga()),
      ],
    );
  }

  Widget createRouteButton(
      BuildContext context, String text, Function builder) {
    return Container(
      child: FlatButton(
        child: Text(text),
        onPressed: () {
          Navigator.push(context, new MaterialPageRoute(builder: builder));
        },
      ),
    );
  }
}
