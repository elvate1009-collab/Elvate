import { useEffect } from 'react';
import { siteConfig } from '../data/siteConfig';

export const useDocumentTitle = (title, description) => {
  useEffect(() => {
    document.title = title ? `${title} | ${siteConfig.companyName}` : siteConfig.companyName;
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.name = 'description';
        document.head.appendChild(metaDescription);
      }
      metaDescription.content = description;
    }
  }, [title, description]);
};