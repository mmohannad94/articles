import React from 'react'
import './App.css';
import { ArticalTitle} from './components/ArticleB';
import MyArticle from './components/ArticleB';
import Form from './components/Form'


class App extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        articlesData : [
            {
                'id': Math.random(),
                'title': 'New Blog Title',
                'body': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
            },
            {
                'id': Math.random(),
                'title': 'New Blog Title2',
                'body': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
            },
            {
                'id': Math.random(),
                'title': 'New Blog Title3',
                'body': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
            }
        ]
    }
    // localStorage.setItem('state', JSON.stringify(localStorage.getItem('data')))
}

deleteItem = (id) => {
    let {articlesData} = this.state;
    let i = articlesData.findIndex(e => e.id === id);
    articlesData.splice(i,1);
    console.log(articlesData);
    this.setState({
        articlesData
    })

    localStorage.setItem('data', JSON.stringify(articlesData))
};

addItem = (item) => {
    let {articlesData} = this.state;
   articlesData.push(item);
   this.setState({
       articlesData
   })
    localStorage.setItem('data', JSON.stringify(articlesData))

}
  render() {

        let lengthA = JSON.parse(localStorage.getItem('data')).length;
      return (
          <div>
              <div className="articles">
                  {lengthA?(
                      JSON.parse(localStorage.getItem('data')).map((e,index)=>{
                          return(
                              <div className='article' key={'art-'+index}>
                                  <MyArticle title={e.title} body={e.body} />
                                  <button onClick={() => this.deleteItem(e.id)}>remove article</button>
                              </div>
                          )
                      })):(
                            <p>there is no articles to show</p>
                          )
                  }
              </div>
              <Form addItem={this.addItem}/>

          </div>
      );
  }
}


export default App;
