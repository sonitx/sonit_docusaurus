import React from 'react';
import Layout from '@theme/Layout';

export default function Hello() {
  // const search = window.location.search;
  // const params = new URLSearchParams(search);
  // const lessionId = params.get('lesson');

  return (
    <Layout title="Hello" description="Hello React Page">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <p>
          This is Detail PAGE /english/listening/detail?p=1
        </p>
      </div>
    </Layout>
  );
}