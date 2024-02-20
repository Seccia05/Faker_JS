import {Table} from 'flowbite-react';
import { fakerIT as faker } from '@faker-js/faker'

function Tabella(props) {
    return (
        <div className="overflow-x-auto">
            <br/>
            <Table hoverable>
                <Table.Head>
                    <Table.HeadCell>Nome</Table.HeadCell>
                    <Table.HeadCell>Lavoro</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {props.array.map((item, index) => (
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {item}
                            </Table.Cell>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {faker.person.jobTitle()}
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div>
    );
}

export default Tabella;
