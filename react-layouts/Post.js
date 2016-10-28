import React from 'react'
import { Box } from 'reflexbox'
import ReactDisqusThread from 'react-disqus-thread'
import Wrapper from './partials/Wrapper'
import Summary from './partials/Summary'
import { getAbsoluteURL } from './utils'

const Post = (props) => {
  return (
    <Wrapper {...props}>
      <Box
        mt={3}
      >
        <header style={{
          borderBottom: '#E7EEF2 1px solid'
        }}>
          <h1 style={{
            margin: 0
          }}>
            {props.title}
          </h1>
          <div style={{
            padding: '2rem 0',
            marginBottom: '2rem',
            fontFamily: '"Open Sans", sans-serif',
            lineHeight: '2.7rem'
          }}>
            <Summary {...props} />
          </div>
        </header>
        <Box
          style={{
            margin: '4rem 0'
          }}
          className='markdown-body'
          dangerouslySetInnerHTML={{ __html: props.content }} />
      </Box>
      <ReactDisqusThread
        shortname={props.site.disqusSN}
        identifier={props.permalink}
        title={props.title}
        url={getAbsoluteURL(props.path)} />
    </Wrapper>
  )
}

export default Post
