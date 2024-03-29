import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { HTMLContent } from '../Content';

const CvSection = styled.section`
  padding: 0.9em;

  h2 {
    text-transform: capitalize;
    @media print {
      font-size: 22px;
      margin-bottom: 0.5em;
    }
  }

  @media print {
    padding: 0em 0.9em 1.7em 0.9em;
    page-break-inside: avoid;
    :last-child {
      padding: 0em;
    }
    :first-child {
      margin-top: 1em;
    }
  }

  @media only screen and (min-width: 768px) {
    padding: 1.5em;
  }
`;

const CvRow = styled.div`
  display: flex;
`;

const CvYear = styled.div.attrs(() => ({
  'data-testid': 'year',
}))`
  display: flex;
  flex-direction: column;
  flex: 1;
  color: ${({ theme }) => theme.textSecondary};

  @media print {
    font-size: 15px;
  }
`;
CvYear.defaultProps = {
  theme: {
    borderSecondary: '#000',
    textSecondary: '#888',
  },
};

const BorderBox = styled.div`
  flex: 6;
  padding-left: 0.5em;
  border-left: 1px solid ${({ theme }) => theme.borderSecondary};
`;

const CvContent = styled(HTMLContent).attrs(() => ({
  'data-testid': 'content',
}))`
  margin-bottom: 10px;
  & p {
    margin-bottom: 0px;
  }
  & li {
    margin-bottom: 0px;
  }

  @media print {
    flex: 6;
    & p {
      font-size: 16px;
    }
    & li {
      font-size: 16px;
    }
    & a {
      text-decoration: inherit;
      color: inherit;
      font-weight: inherit;
    }
  }
`;

function compareDates(a, b) {
  return new Date(b.start) - new Date(a.start);
}

function entryRenderer(entry) {
  const dateOptionsMonthYear = { month: 'short', year: 'numeric' };
  const dateOptionsyear = { year: 'numeric' };
  const isRange = entry.end !== entry.start;
  const isCurrent = !entry.end;

  let startLabel = null;
  let endLabel = null;

  const dateOptions =
    entry.start.length > 4 ? dateOptionsMonthYear : dateOptionsyear;
  startLabel = new Date(entry.start).toLocaleString('en-En', dateOptions);
  startLabel += isCurrent || isRange ? '–' : '';
  endLabel = isCurrent
    ? 'Present'
    : isRange
    ? new Date(entry.end).toLocaleString('en-En', dateOptions)
    : null;

  return (
    <CvRow key={entry.filePath}>
      <CvYear>
        <span>{startLabel}</span>
        <span>{endLabel}</span>
      </CvYear>
      <BorderBox>
        <CvContent content={entry.content} />
      </BorderBox>
    </CvRow>
  );
}

function simpleEntryRenderer(entry) {
  return <CvContent key={entry.filePath} content={entry.content} />;
}

const Section = ({ section, entries, entryRenderer }) => {
  const rows = [...entries].sort(compareDates).map((entry) => {
    return entryRenderer(entry);
  });

  return (
    <CvSection key={section}>
      <h2>{section}</h2>
      {rows}
    </CvSection>
  );
};

const SectionWithoutYear = (props) => {
  return <Section {...props} entryRenderer={simpleEntryRenderer} />;
};

const SectionWithYear = (props) => {
  return <Section {...props} entryRenderer={entryRenderer} />;
};

const entryPropTypes = {
  filePath: PropTypes.string,
  start: PropTypes.string,
  end: PropTypes.string,
  content: PropTypes.string,
};

const sectionPropTypes = {
  section: PropTypes.string,
  entries: PropTypes.arrayOf(PropTypes.shape(entryPropTypes)),
};

SectionWithoutYear.propTypes = sectionPropTypes;
SectionWithYear.propTypes = sectionPropTypes;
Section.propTypes = {
  ...sectionPropTypes,
  entryRenderer: PropTypes.func,
};

export { SectionWithYear, SectionWithoutYear };
export default Section;
