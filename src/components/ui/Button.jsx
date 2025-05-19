// src/components/ui/button.jsx
export function Button({ children, ...props }) {
    return (
      <button
        className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-xl"
        {...props}
      >
        {children}
      </button>
    );
  }
  