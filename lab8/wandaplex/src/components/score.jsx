import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from 'react';
import { PaginationControl } from 'react-bootstrap-pagination-control';

export default () => {
  const [page, setPage] = useState(1)

  return <PaginationControl
    page={page}
    between={10}
    total={5}
    limit={1}
    changePage={(page) => {
      setPage(page)
    }}
    ellipsis={1}
  />
}