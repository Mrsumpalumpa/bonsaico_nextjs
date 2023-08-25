import React from 'react'

const page = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      prod details {params.id}
    </div>
  )
}

export default page
