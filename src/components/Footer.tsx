import React, { FC } from 'react'

const Footer: FC = () => {
    return (
        <div className="Footer mt-2 text-xs text-muted text-center">
            <div className="flex flex-col md:flex-row justify-center items-center mt-2">
                <div>Powered by <a className="hover:underline" href="https://github.com/mathdroid/covid-19-api">COVID-19 API</a> | <a className="hover:underline" href="https://github.com/cdmoro/covid-19-stats">Based on Carlos Bonadeo Covid-Live</a></div>
                <div className="hidden md:inline-block px-1">|</div>
                <div>
                    Made by <a className="hover:underline" href="https://github.com/dkapexhiu" target="_blank" rel="noopener noreferrer">Daniel</a>
                </div>
            </div>
        </div>
    )
}

export default Footer
