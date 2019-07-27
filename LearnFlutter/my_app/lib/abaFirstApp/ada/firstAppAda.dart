import 'package:flutter/material.dart';
import 'package:english_words/english_words.dart';

class FirstAppAda extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final wordPair = WordPair.random();
    return new MaterialApp(
        title: 'Flutter Demo',
        home: new Scaffold(
          appBar: new AppBar(
            title: new Text('welcome to flutter'),
          ),
          body: RandomWords(),
        ));
  }
}

class RandomWords extends StatefulWidget {
  @override
  RandomWordsState createState() => RandomWordsState();
}

class RandomWordsState extends State<RandomWords> {
  final _suggestions = <WordPair>[];
  final _biggerFont = const TextStyle(fontSize: 18.0);

  @override
  Widget build(BuildContext context) {
    return _buildSuggestions();
  }

  Widget _buildSuggestions() {
    // 使用ListView.builder可以创建无限滚动的列表
    return ListView.builder(
      padding: const EdgeInsets.all(16.0),
      itemBuilder: (context, i) {
        // 奇数返回分割线
        if (i.isOdd) return Divider();

        final index = i ~/ 2; // 向下取整除。计算出实际取到的单词列表序号
        if (index >= _suggestions.length) {
          // 当单词列表被取完，再生成10个
          _suggestions.addAll(generateWordPairs().take(10));
        }
        return _buildRow(_suggestions[index]);
      },
    );
  }

  // 返回list的一项
  Widget _buildRow(WordPair pair) {
    return ListTile(
      title: Text(
        pair.asPascalCase,
        style: _biggerFont,
      ),
    );
  }
}
