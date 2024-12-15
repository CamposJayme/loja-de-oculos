import styles from './SecaoContatos.module.css';
import Image from 'next/image';
import Local from '../../../public/local.png';
import Telefone from '../../../public/telefone.png';
import Email from '../../../public/email.png';
import Facebook from '../../../public/fb.png';
import Instagram from '../../../public/ig.png';
import Twitter from '../../../public/tt.png';

export default function SecaoContatos() {
    return (
        <section className={styles.secao_contatos}>
            <div className={styles.container_contatos}>
                <div className={styles.texto_contatos}>
                    <h2>Fale conosco</h2>
                    <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>
                </div>
                <div className={styles.cards_contatos}>
                    <div>
                        <h3>Nossos Contatos</h3>
                        <ul>
                            <li>
                                <Image src={Local}/>
                                <span>Nova Iguaçu, RJ</span>
                            </li>
                            <li>
                                <Image src={Telefone}/>
                                <span>(21) 9999-9999</span>
                            </li>
                            <li>
                                <Image src={Email}/>
                                <span>contato@oticavida.com</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3>Nossas Redes Sociais</h3>
                        <ul>
                            <li>
                                <Image src={Facebook}/>
                                <span>/OticaVida</span>
                            </li>
                            <li>
                                <Image src={Instagram}/>
                                <span>@oticavidarj</span>
                            </li>
                            <li>
                                <Image src={Twitter}/>
                                <span>@oticavidarj</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}