import { FormEvent, useState } from 'react'

import { Alert, InputField, Title } from './'
import { useFormFields } from '../hooks/form-hook'

interface QueryProps {
  query: string
}

export const Hero = () => {
  const [inputs, handleInputChange] = useFormFields<QueryProps>({
    query: ''
  })
  const [error, setError] = useState<any>(null)

  const searchHandler = (e: FormEvent) => {
    e.preventDefault()

    if(!inputs.query) {
      return setError('Please enter a valid search value.')
    }

    console.log(inputs)
  }

  const clearError = () => {
    setError(null)
  }

  setInterval(() => {
    setError(null)
  }, 10000)

  return (
    <>
    {error && (<Alert type='error' message={error} onClose={clearError} />)}
    <section>
      <div className="container">
        <Title name="The Blog" />
        <p className="pt-4 max-w-lg text-sm text-gray-500">
          Practical tutorials along with working code samples and boilerplate
          projects for real-world web development problems. The tutorials are
          concise as possible, focusing on the code, structure and
          functionality, while trying to leave out extra fluff or info that
          isn&apos;t useful.
        </p>

        <form className="max-w-md mt-10 relative flex items-center">
          <InputField type='text' name='query' placeholder='Search' value={inputs.query} onChange={handleInputChange} onFocus={clearError} fullwidth />
          <button type='submit' className="bg-black text-white py-2 px-6 rounded-md hover:bg-gray-900" onClick={searchHandler}>
            Search
          </button>
        </form>
      </div>
    </section>
    </>
  )
}
