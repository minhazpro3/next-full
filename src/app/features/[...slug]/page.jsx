import React from 'react'

const Page = async({params}) => {
      
    const slug = await params.slug
    console.log(slug);
    if(slug.length===1){
        return <div>Features 1</div>;
    }
    if(slug.length===2){
        return <div>Features 2</div>;
    }
    if(slug===3){
        return <div>Features 3</div>;
    }
  return (
    <div>Features all</div>
  )
}

export default Page