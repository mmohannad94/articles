

export const ArticalTitle = ({title}) => (<h1>{title}</h1>);
export const Pargraph = ({text}) => (<p>{text}</p>);

const ArticleB = ({title, body})=> (
    <article className="artical">
      <ArticalTitle title={title}/>
      { body? <p>{body}</p>: '' }
    </article>);


export default ArticleB;