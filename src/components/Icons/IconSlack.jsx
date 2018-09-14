import React from 'react';
import { string } from 'prop-types';

const IconSlack = ({ width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 19 19"
  >
    <defs>
      <path id="a" d="M.029.03h3.84v3.926H.029z" />
      <path id="c" d="M.032.034H3.88v3.952H.032z" />
      <path id="e" d="M.054.055h3.991V3.9H.055z" />
      <path id="g" d="M0 .004h3.91v3.821H0z" />
    </defs>
    <g fill="none" fillRule="evenodd">
      <path
        fill="#46C29C"
        d="M5.522 3.37l.566 1.764-3.202 1.02L2.32 4.39a1.675 1.675 0 0 1 1.09-2.107 1.682 1.682 0 0 1 2.112 1.086"
      />
      <g transform="translate(6.035 15.01)">
        <mask id="b" fill="#fff">
          <use xlinkHref="#a" />
        </mask>
        <path
          fill="#46C29C"
          d="M3.23.03l.558 1.739A1.675 1.675 0 0 1 2.7 3.876 1.682 1.682 0 0 1 .587 2.79L.03 1.052 3.23.03z"
          mask="url(#b)"
        />
      </g>
      <path fill="#46C29C" d="M7.113 8.327l1.129 3.52-3.202 1.021-1.13-3.52z" />
      <path fill="#FFF" d="M6.088 5.134l1.025 3.193L3.91 9.348 2.886 6.155z" />
      <g transform="translate(8.941 .022)">
        <mask id="d" fill="#fff">
          <use xlinkHref="#c" />
        </mask>
        <path
          fill="#ECB227"
          d="M3.314 1.2l.566 1.765L.678 3.986.112 2.221A1.675 1.675 0 0 1 1.202.114 1.682 1.682 0 0 1 3.313 1.2"
          mask="url(#d)"
        />
      </g>
      <path
        fill="#ECB227"
        d="M16 12.893l.557 1.739a1.674 1.674 0 0 1-1.089 2.107 1.682 1.682 0 0 1-2.113-1.086l-.558-1.739L16 12.894zM13.846 6.18l1.129 3.52-3.202 1.021-1.13-3.52z"
      />
      <g transform="translate(14.92 8.992)">
        <mask id="f" fill="#fff">
          <use xlinkHref="#e" />
        </mask>
        <path
          fill="#E51770"
          d="M3.965 1.22a1.675 1.675 0 0 1-1.09 2.108L1.08 3.9.054.708 1.851.135A1.683 1.683 0 0 1 3.965 1.22"
          mask="url(#f)"
        />
      </g>
      <path
        fill="#E51770"
        d="M11.773 10.721l1.024 3.194-3.53 1.126-1.025-3.194zM5.04 12.868l1.024 3.194-1.717.547a1.682 1.682 0 0 1-2.113-1.086 1.675 1.675 0 0 1 1.089-2.107l1.717-.548z"
      />
      <path
        fill="#513053"
        d="M8.242 11.847l1.024 3.194-3.202 1.02-1.024-3.193z"
      />
      <path
        fill="#D4242C"
        d="M14.975 9.7l1.024 3.193-3.202 1.022-1.024-3.194z"
      />
      <g transform="translate(0 6.15)">
        <mask id="h" fill="#fff">
          <use xlinkHref="#g" />
        </mask>
        <path
          fill="#7BD2E0"
          d="M2.886.004l1.025 3.193-1.717.548A1.682 1.682 0 0 1 .08 2.659 1.675 1.675 0 0 1 1.17.552L2.885.004z"
          mask="url(#h)"
        />
      </g>
      <path
        fill="#7BD2E0"
        d="M9.62 4.008L10.644 7.2 7.113 8.327 6.088 5.134z"
      />
      <path
        fill="#1B9F89"
        d="M6.088 5.134l1.025 3.193L3.91 9.348 2.886 6.155z"
      />
      <path
        fill="#7BD2E0"
        d="M16.732 3.5a1.675 1.675 0 0 1-1.09 2.107l-1.796.573-1.024-3.193 1.797-.573A1.683 1.683 0 0 1 16.732 3.5"
      />
      <path
        fill="#719242"
        d="M12.822 2.987l1.024 3.193-3.202 1.021-1.025-3.193z"
      />
    </g>
  </svg>
);

IconSlack.propTypes = {
  width: string.isRequired,
  height: string.isRequired,
};

export default IconSlack;
