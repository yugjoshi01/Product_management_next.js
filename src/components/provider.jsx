"use client"

import Uilayout from '@/components/Ui_layout';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


function Provider({children}) {
    
    const queryClient = new QueryClient();

  return (
    <>
     <AntdRegistry>
        <QueryClientProvider client={queryClient}>
          <Uilayout>
           {children}
          </Uilayout>
        </QueryClientProvider>
        </AntdRegistry>
    </>
  )
}

export default Provider