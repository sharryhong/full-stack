import React from 'react';
import PropTypes from 'prop-types';
import { List, Button, Card } from 'antd';
import { StopOutlined } from '@ant-design/icons';

const FollowList = ({header, data}) => {
  return (
    <List
      grid={{ gutter: 4, xs: 2, md: 3}}
      header={<div>{header}</div>}
      loadMore={<div><Button>더보기</Button></div>}
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <Card actions={[<StopOutlined key="stop" />]}>
            <Card.Meta description={item.nickname} />
          </Card>
        </List.Item>
      )}
    />
  )
}

FollowList.propTypes = {
  header: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
}

export default FollowList;