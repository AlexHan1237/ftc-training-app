import React from "react";
import { Breadcrumb } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const SiteBreadcrumbs = () => {
  const location = useLocation();

  const raw_paths = location.pathname.split('/');
  const clean_paths = raw_paths.filter(item => item !== '');
  let current_link = '';

  const matchedRoutes = clean_paths.map((element, index) => {
    current_link += '/' + element;
    
    let key = element;

    let crumb = element.replace(/_/g, ' ');

    if (index + 1 === clean_paths.length)
      return (<Breadcrumb.Item key={key} active> {crumb} </Breadcrumb.Item>);
    else
      return (<Breadcrumb.Item key={key} href={current_link}> {crumb} </Breadcrumb.Item>);

  });

  return (<Breadcrumb > {matchedRoutes} </Breadcrumb>);
};

export default SiteBreadcrumbs;