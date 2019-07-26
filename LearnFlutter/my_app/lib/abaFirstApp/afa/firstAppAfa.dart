import 'package:flutter/material.dart';
import 'package:english_words/english_words.dart';

class FirstAppAfa extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final wordPair = WordPair.random();
    return new MaterialApp(title: 'Flutter Demo', home: new RandomWords());
  }
}

class RandomWords extends StatefulWidget {
  @override
  RandomWordsState createState() => RandomWordsState();
}

class RandomWordsState extends State<RandomWords> {
  final List<WordPair> _suggestions = <WordPair>[];
  final Set<WordPair> _saved = new Set<WordPair>();
  final _biggerFont = const TextStyle(fontSize: 18.0);

  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      appBar: new AppBar(
        title: new Text('welcome to flutter'),
        actions: <Widget>[
          new IconButton(
            icon: const Icon(Icons.list),
            onPressed: _pushSaved,
          ),
        ],
      ),
      body: _buildSuggestions(),
    );
  }

  //  创建list
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

  // 创建list的一项
  Widget _buildRow(WordPair pair) {
    final bool alreadySaved = _saved.contains(pair);
    return ListTile(
      title: Text(
        pair.asPascalCase,
        style: _biggerFont,
      ),
      trailing: new Icon(
        alreadySaved ? Icons.favorite : Icons.favorite_border,
        color: alreadySaved ? Colors.red : null,
      ),
      onTap: () {
        // setState会触发state的build方法
        setState(() {
          if (alreadySaved) {
            _saved.remove(pair);
          } else {
            _saved.add(pair);
          }
        });
      },
    );
  }

  // 响应导航栏按钮点击，显示收藏的项
  void _pushSaved() {
    // 导航
    Navigator.of(context).push(
      // MaterialPageRoute添加一个平台适配的过渡
      new MaterialPageRoute(
        builder: (BuildContext context) {
          final Iterable<ListTile> tiles = _saved.map((WordPair pair) {
            return new ListTile(
              title: new Text(pair.asPascalCase, style: _biggerFont),
            );
          });
          // 创建带分割线的ListTiles
          final List<Widget> divided = ListTile.divideTiles(
            context: context,
            tiles: tiles,
          ).toList();
          return new Scaffold(
            appBar: new AppBar(title: const Text('Saved Suggestions')),
            body: new ListView(children: divided),
          );
        },
      ),
    );
  }
}
