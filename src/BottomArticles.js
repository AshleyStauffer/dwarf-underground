import React from 'react'

const CreateArticle = (props) => {
  return (
      <div className="small-6 medium-3 columns other-article">
          <a href="#">
              <img src={props.article.src} alt={props.article.alt} />
              <p>{props.article.description}</p>
          </a> 
      </div>
  )
} 

class BottomArticles extends React.Component {
  constructor(props) {
      super(props)

      this.state = {
          link: [
              { src: 'https://www.enclavepublishing.com/wp-content/uploads/2015/11/tumblr_inline_mtvwr6T4qH1r8eb4v.gif', 
                  alt:'orc',
                  description: 'Single Orcs in Indianapolis' 
                },
              { src: 'https://images.fineartamerica.com/images-medium-large-5/rocky-mountain-landscape-meadow-in-spring-western-panorama-with-wildflowers-square-format-walt-curlee.jpg', 
                  alt: 'mountain',
                  description: 'You won\'t believe what\'s under this mountain'
              },
              { src: 'http://orig01.deviantart.net/a278/f/2010/357/9/7/seamless___gold_coins_by_bartalon-d35iydr.jpg',
                  alt: 'gold',
                  description: 'Mine 20% more gold with One Weird Trick'
              },
              { src: 'http://cdn23.us1.fansshare.com/photos/thehobbit/the-hobbit-square-characters-833282558.jpg',
                  alt: 'hobbit',
                  description: 'Surprise for Indiana Hobbits born before 1999'
              }
          ]
      }
    }
      render() {
          return (
            <div className="small-12 columns other-articles">
              <h2>From around the Realm</h2>
              {this.state.link.map(square =>  <CreateArticle article ={square} />) }
            </div>
          )
      }

}

export default BottomArticles