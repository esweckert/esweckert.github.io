import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import MDXTable from './Table';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  table: MDXTable,
};