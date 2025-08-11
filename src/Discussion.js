import { useState, useReducer } from 'react'

const discussions = [
  {
    id: 1,
    title: 'lorem ipsum dolor sit amet',
    author: 'Namık Korona',
    timeAgo: '2 gün önce',
  },
  {
    id: 2,
    title: 'consectetur adipiscing elit',
    author: 'Ayşe Yılmaz',
    timeAgo: '1 hafta önce',
  },
  {
    id: 3,
    title: 'sed do eius mod tempor incididunt',
    author: 'Mehmet Demir',
    timeAgo: '3 gün önce',
  },
]

const Discussion = () => {
  const [count, setCount] = useState(0)
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case 'increment':
          return { count: state.count + 1 }
        default:
          throw new Error()
      }
    },
    { count: 0 }
  )

  //   setCount(count + 1)
  //   dispatch({ type: 'increment' })
  console.log(count)
  console.log(state.count)

  return (
    <>
      {discussions.map((discussion, index) => (
        <div key={discussion.id} className="flex-auto">
          <li className=" items-center  gap-x-6 gap-y-4 py-5 sm:flex-nowrap">
            <h2 className="text-sm font-semibold leading-6 text-gray-900">
              <a href="#" className="hover:underline">
                Tartışma konusu: #{index + 1} - {discussion.title}
              </a>
            </h2>
            <div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
              <a href="#" className="hover:underline">
                <p className="mt-1 text-sm text-gray-500">
                  {discussion.author}
                </p>
              </a>
              <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 fill-current">
                <circle cx={1} cy={1} r={1} />
              </svg>
              <p className="mt-1 text-sm text-gray-500">{discussion.timeAgo}</p>
            </div>
          </li>
          <hr style={{ borderColor: '#ccc' }} />
        </div>
      ))}
    </>
  )
}
export default Discussion
