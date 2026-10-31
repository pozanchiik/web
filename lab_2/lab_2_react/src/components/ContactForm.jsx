import { useState, useEffect } from 'react';

function ContactForm() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 60000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 bg-black/60 flex justify-center items-center">
                    <div className="bg-slate-700 p-6 rounded-lg border border-slate-600 text-slate-300 w-96">
                        
                        <form action="https://formspree.io/f/mjyyaknj" method="POST" className="flex flex-col gap-3">
                            <label>
                                Your name:
                                <input type="text" name="Name" className="w-full mt-1 p-1 bg-slate-800 rounded border border-slate-600" />
                            </label>
                            
                            <label>
                                Your Email:
                                <input type="email" name="Email" className="w-full mt-1 p-1 bg-slate-800 rounded border border-slate-600" />
                            </label>
                            
                            <label>
                                Your phone:
                                <input type="tel" name="Number" className="w-full mt-1 p-1 bg-slate-800 rounded border border-slate-600" />
                            </label>
                            
                            <label>
                                Your text:
                                <textarea name="Message" className="w-full mt-1 p-1 bg-slate-800 rounded border border-slate-600"></textarea>
                            </label>
                            
                            <div className="flex justify-between mt-4">
                                <button type="submit" className="bg-lime-800 text-lime-100 px-4 py-2 rounded">
                                    Send
                                </button>
                                <button type="button" onClick={() => setIsOpen(false)} className="bg-slate-600 text-white px-4 py-2 rounded">
                                    Close
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
            )}
        </>
    );
}

export default ContactForm;