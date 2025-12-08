import Head from 'next/head'
import Work from '../components/Work';
import HeadTag from '../components/HeadTag';

const work = ({ currentTheme }) => {
    return (
        <>
            <HeadTag page='Work'/>
            <div>
                <Work currentTheme={currentTheme}/>
            </div>
        </>
    )
}

export default work