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
                                <a href="#">
                                    <Image src={Local}/>
                                </a>
                                <span>Nova Iguaçu, RJ</span>
                            </li>
                            <li>
                                <a href="#">
                                    <Image src={Telefone}/>
                                </a>
                                <span>(21) 9999-9999</span>
                            </li>
                            <li>
                                <a href="#">
                                    <Image src={Email}/>
                                </a>
                                <span>contato@oticavida.com</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3>Nossas Redes Sociais</h3>
                        <ul>
                            <li>
                                <a href="#">
                                    <Image src={Facebook}/>
                                </a>
                                <span>/OticaVida</span>
                            </li>
                            <li>
                                <a href="#">
                                    <Image src={Instagram}/>
                                </a>
                                <span>@oticavidarj</span>
                            </li>
                            <li>
                                <a href="#">
                                    <Image src={Twitter}/>
                                </a>
                                <span>@oticavidarj</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}