import { useTypewriter } from 'react-simple-typewriter';


const AllCountries = () => {
    const [text] = useTypewriter({
        words: ['Bangladesh', 'Thailand', 'Indonesia', 'Malaysia', 'Vietnam', 'Cambodia'],
        loop: 0
      })
    
    return (
        <div>
            <div>
                <h2 className='text-2xl md:text-4xl lg:text-5xl font-semibold text-center md:mb-2 lg:mb-4 dark:text-white'>From Countries like:</h2>
                <div className='App text-center h-24'>
                    <span className='text-3xl md:text-4xl lg:text-5xl font-medium text-green-600'>{text}</span>
                </div>
                
            </div>
        </div>
    );
};

export default AllCountries;