export default function ProjectCard({ project, isPreviewOpen, onTogglePreview }) {
    return (
        <div className='bg-gray-800 rounded-lg p-4 max-w-md w-full h-fit font-poppins flex flex-col'>
            <img
                src={project.image}
                alt={project.title}
                className='w-full rounded-md text-orange-400'
            />

            <h3 className='text-orange-400 font-extrabold text-center my-4 text-2xl'>{project.title}</h3>
            <p className='text-xl'>{project.description}</p>

            <div className='flex gap-4 mt-4 justify-center'>
               <button className='bg-gray-400 rounded-lg px-4 py-2'><a href={project.github} target="_blank" rel="noopener noreferrer">
                    Github
                </a></button> 
                <button type="button" className='bg-gray-400 rounded-lg px-4 py-2' onClick={onTogglePreview}>
                    {isPreviewOpen ? 'Close Preview' : 'Preview'}
                </button>
            </div>

            {isPreviewOpen && (
                <div className='mt-4 rounded-md overflow-hidden border border-gray-700'>
                    <div className='flex justify-between items-center px-3 py-2 bg-gray-700/70'>
                        <span className='text-sm text-orange-200'>Preview</span>
                        <button
                            type="button"
                            onClick={onTogglePreview}
                            className='text-sm text-white hover:text-orange-300'
                        >
                            Close
                        </button>
                    </div>
                    <iframe
                        src={project.demoUrl}
                        title={project.title}
                        className='w-full h-60 border-0'
                    />
                </div>
            )}
        </div>
    );
}
