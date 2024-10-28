"use client"

import { Button, Flex, TextInput } from "@mantine/core";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { CiSearch } from "react-icons/ci";

interface InputSearchProps {
    search: string,
}

const InputSearch = () => {
    const { register, handleSubmit } = useForm<InputSearchProps>()
    const router = useRouter()
    
    const onSubmit = (data: InputSearchProps) => {
        router.push(`/barbershops?search=${data.search}`)
    }

    return (  
        <form style={{ width: "100%" }} onSubmit={handleSubmit(onSubmit)}>
            <Flex gap={8} mt={24} mb={24} justify="space-between">
                <TextInput 
                    placeholder="Buscar" 
                    flex={1} 
                    radius={8}
                    variant="outline" 
                    style={{
                        flex: 1
                    }}
                    styles={{
                    input: {
                        color: 'var(--gray-three)',
                        border: '1px solid var(--gray-one)',
                        borderRadius: '8px',
                    },
                    }}
                    // Conecta o campo de input ao React Hook Form
                    {...register("search")}
                />

                <Button type="submit" bg="var(--primary-purple)" pr={10} pl={10} radius={8}>
                    <CiSearch size={20}/>
                </Button>
            </Flex>
        </form>
    );
}
 
export default InputSearch ;