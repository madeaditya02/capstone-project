export default function Input({ ...params }) {
  return <input {...params} className={`block w-full px-3 py-2 rounded-md border border-black/50 focus:outline-primary-500 mt-1${params.className ? ` ${params.className}` : ''}`}  />
}