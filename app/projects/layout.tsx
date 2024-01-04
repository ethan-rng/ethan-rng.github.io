export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {

    return (
        <div>    
            <main className='bg-tertiary/90 z-30 sm:px-32 pt-32 flex flex-col'>
                {children}
            </main>
        </div>
    );
}