import { catalogues, getCatalogueUrl } from '../data/catalogues';
import { DocumentIcon, ExternalLinkIcon } from './Icons';

export default function Catalogues() {
  if (catalogues.length === 0) {
    return null;
  }

  return (
    <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
      {catalogues.map((catalogue) => {
        const pdfUrl = getCatalogueUrl(catalogue.filename);

        return (
          <div
            key={catalogue.id}
            className="group flex flex-col rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl sm:w-96"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary-100 text-primary-600 transition-colors duration-300 group-hover:bg-primary-600 group-hover:text-white">
              <DocumentIcon className="h-7 w-7" />
            </div>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">{catalogue.title}</h3>
            <p className="mt-2 flex-grow text-gray-600">{catalogue.description}</p>

            <div className="mt-6">
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-700"
              >
                <ExternalLinkIcon className="mr-2 h-4 w-4" />
                View Catalogue
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
