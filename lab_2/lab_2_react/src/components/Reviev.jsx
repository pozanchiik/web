import { useState, useEffect } from 'react';

function Reviews() {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
            .then(response => response.json())
            .then(data => {
                setReviews(data);
            });
    }, []);

    return (
        <section className="col-span-4 p-4 mt-4 text-slate-300 rounded-lg bg-slate-700 border border-slate-600">
            <h2 className="text-xl font-bold mb-4 text-lime-100">Reviews</h2>
            
            <div className="flex flex-col gap-4">
                {reviews.map(review => (
                    <div key={review.id} className="p-3 border border-slate-500 rounded-md bg-slate-800">
                        <strong className="text-lime-50">{review.name}</strong>
                        <br />
                        <small className="text-slate-400">{review.email}</small>
                        <p className="mt-2 text-sm">{review.body}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Reviews;