import { forwardRef } from 'react';
const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
    const defaultClasses = 'w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600';

    return (
        <div>
            <label className="text-sm font-bold uppercase text-stone-500">{label}</label>
            {textarea && <textarea className={defaultClasses} {...props} ref={ref} />}
            {!textarea && <input {...props} ref={ref} className={defaultClasses} />}
        </div>
    );
});

export default Input;
