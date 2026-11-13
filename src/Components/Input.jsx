import React from 'react'

const Input = () => {
    return (
        <>
            <form class="flex items-center justify-between w-full max-w-md bg-white p-1.5 rounded-lg shadow-md">
                <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    class="w-full px-4 py-2 text-sm text-gray-700 placeholder-gray-400 bg-transparent border-none outline-none focus:ring-0"
                />
                <button
                    type="submit"
                    class="px-7 py-2.5 text-sm font-medium text-white bg-[#F04438] hover:bg-[#D92D20] rounded-md transition-colors shrink-0 cursor-pointer"
                >
                    Send
                </button>
            </form>
        </>
    )
}

export default Input