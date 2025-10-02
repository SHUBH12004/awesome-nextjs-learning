import { notFound } from 'next/navigation';

export default async function BlogPost({ params }) {
    const resolvedParams = await params;
    const slug = decodeURIComponent(resolvedParams.slug);
    //use decodeURIComponent, otherwise c++ will come as 'c%2B%2B' 
    console.log('params:', resolvedParams, 'slug:', slug);
    let languages = ["javascript", "python", "java", "c++", "c", "php", "ruby", "swift", "kotlin", "go"];
    if (languages.includes(slug)) {
        return <div>Blog Post: {slug}</div>;
    } else {
        notFound();
    }
}