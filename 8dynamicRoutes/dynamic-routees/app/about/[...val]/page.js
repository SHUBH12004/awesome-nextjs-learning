export default function Page({ params }) {
    console.log(params)
    // fetch your blog post by its slug
    return <div>I am about page check console</div>

    //here ..val if we have multiple segments, then it will be an array.
    //for about/shubh/shubh, params will be {val: ['shubh', 'shubh']}
    //for about/shubh, params will be {val: ['shubh']}
    //for about, params will be {val: []}
    //for about/shubh/shubh/shubh, params will be {val: ['shubh', 'shubh', 'shubh']}
    //for about/shubh/shubh/shubh/shubh, params will be {val: ['shubh', 'shubh', 'shubh', 'shubh']}
    //for about/shubh/shubh/shubh/shubh/shubh, params will be {val: ['shubh', 'shubh', 'shubh', 'shubh', 'shubh']}
    //for about/shubh/shubh/shubh/shubh/shubh/shubh, params will be {val: ['shubh', 'shubh', 'shubh', 'shubh', 'shubh', 'shubh']}
    //for about/shubh/shubh/shubh/shubh/shubh/shubh/shubh, params will be {val: ['shubh', 'shubh', 'shubh', 'shubh', 'shubh', 'shubh', 'shubh']}
    //for about/shubh/shubh/shubh/shubh/shubh/shubh/shubh/shubh, params will be {val: ['shubh', 'shubh', 'shubh', 'shubh', 'shubh', 'shubh', 'shubh', 'shubh']}
  }