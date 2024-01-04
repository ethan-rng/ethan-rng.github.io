export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {

    return (
        <div>    
            <main className='bg-tertiary/90 z-30 flex flex-col '>
                {children}
            </main>
        </div>
    );
}