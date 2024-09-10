import React from 'react'
import MySelect from './UI/MySelect'
import MyInput from './UI/input/MyInput'
const PostFilter = ({filter, setFilter}) => {
  return (
      <div>
        <MyInput
          placeholder="serch..."
          value={filter.query}
          onChange={(el) => setFilter({...filter, query: el.target.value})}
        />
        <MySelect
          onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
          value={filter.sort}
          defaultValue="sort by"
          options={[
            { value: "title", name: "by title" },
            { value: "body", name: "by description" },
          ]}
        />
      </div>
  )
}

export default PostFilter