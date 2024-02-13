import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { BusinessService } from 'src/app/core/service/business/business.service';
import { ProfessionalService } from 'src/app/core/service/professional/professional.service';

@Component({
  selector: 'app-edit-profile-infos-modal',
  templateUrl: './edit-profile-infos-modal.component.html',
  styleUrls: ['./edit-profile-infos-modal.component.scss']
})
export class EditProfileInfosModalComponent {
  @Input() profile: any;
  @Input() showCellphone: any;
  @Output() closeModal = new EventEmitter<boolean>();
  @Output() saveChanges = new EventEmitter<any>();
  @Output() showCellphoneField = new EventEmitter<boolean>();

  protected editedProfile: any;
  protected isValid: boolean = true;
  protected selectedPhoto: File | null = null;
  protected errMsg: string = '';
  protected pageType: string = '';
  protected idade: number = 0;
  protected isLoading: boolean = false;

  constructor(private route: ActivatedRoute, private professionalService: ProfessionalService,
    private businessService: BusinessService, private messageService: MessageService) {
    this.pageType = this.route.snapshot.url[0].path;
  }

  onPhotoChange(event: any) {
    this.selectedPhoto = event.target.files[0];
    this.resizeImage();
  }
  
  resizeImage() {
    const reader = new FileReader();
  
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d')!;
        
        const maxWidth = 1080;
        const maxHeight = 1080;
  
        let width = img.width;
        let height = img.height;
  
        if (width > maxWidth || height > maxHeight) {
          const ratio = Math.min(maxWidth / width, maxHeight / height);
          width *= ratio;
          height *= ratio;
        }

        canvas.width = width;
        canvas.height = height;

        context.drawImage(img, 0, 0, width, height);

        const base64String = canvas.toDataURL(this.selectedPhoto!.type); // ou 'image/png' se preferir PNG
  
        if (this.pageType == 'professional-profile') {
          this.editedProfile.ftPerfil = base64String;
        } else {
          this.editedProfile.fotoPerfil = base64String;
        }
      };
  
      img.src = event.target?.result as string;
    };
  
    reader.readAsDataURL(this.selectedPhoto as Blob);
  }

  ngOnInit() {
    this.editedProfile = JSON.parse(JSON.stringify(this.profile));
    document.querySelector('.main')?.classList.add('blur-background');
    if (this.pageType == 'professional-profile') {
      this.idade = new Date().getFullYear() - this.editedProfile.dataNascimento.split("/")[2];
    }
  }

  onSubmit() {
    this.isLoading = true;

    if (this.pageType == 'professional-profile') {
      this.professionalService.salvarDadosPessoais(this.editedProfile).subscribe(
        res => {
          this.isLoading = false;
          this.saveChanges.emit();
          this.showCellphoneField.emit(this.showCellphone);
          document.querySelector('.main')?.classList.remove('blur-background');
        },
        error => {
          this.isLoading = false;
          this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Erro ao atualizar dados pessoais' });
        }
      );
    } else {
      this.businessService.updateBusinessData(this.editedProfile).subscribe(
        res => {
          this.isLoading = false;
          this.saveChanges.emit();
          this.showCellphoneField.emit(this.showCellphone);
          document.querySelector('.main')?.classList.remove('blur-background');
        },
        error => {
          this.isLoading = false;
          this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Erro ao atualizar dados da empresa' });
        }
      )
    }
  }

  cancelEdit() {
    this.closeModal.emit(true);
    document.querySelector('.main')?.classList.remove('blur-background');
  }

  getCityOptions(state: string): string[] {
    const cities: { [key: string]: string[] } = {
      'Acre': [
        'Rio Branco', 'Cruzeiro do Sul', 'Sena Madureira', 'Mâncio Lima', 'Manoel Urbano', 'Marechal Thaumaturgo',
        'Plácido de Castro', 'Porto Walter', 'Porto Acre', 'Rodrigues Alves', 'Xapuri', 'Assis Brasil', 'Brasiléia',
        'Bujari', 'Capixaba', 'Epitaciolândia', 'Feijó', 'Jordão', 'Porto Acre', 'Porto Walter', 'Rio Branco', 'Rodrigues Alves',
        'Santa Rosa do Purus', 'Sena Madureira', 'Senador Guiomard', 'Tarauacá', 'Xapuri', 'Cruzeiro do Sul', 'Porto Acre',
        'Porto Walter', 'Rodrigues Alves', 'Mâncio Lima', 'Manoel Urbano', 'Marechal Thaumaturgo', 'Plácido de Castro', 'Assis Brasil',
        'Brasiléia', 'Epitaciolândia', 'Xapuri'
      ],
      'Alagoas': [
        'Maceió', 'Arapiraca', 'Rio Largo', 'Anadia', 'Arapiraca', 'Atalaia', 'Barra de Santo Antônio', 'Barra de São Miguel',
        'Batalha', 'Belém', 'Belo Monte', 'Boca da Mata', 'Branquinha', 'Cacimbinhas', 'Cajueiro', 'Campestre', 'Campo Alegre',
        'Campo Grande', 'Canapi', 'Capela', 'Carneiros', 'Chã Preta', 'Coité do Nóia', 'Colônia Leopoldina', 'Coqueiro Seco',
        'Coruripe', 'Craíbas', 'Delmiro Gouveia', 'Dois Riachos', 'Estrela de Alagoas', 'Feira Grande', 'Feliz Deserto',
        'Flexeiras', 'Girau do Ponciano', 'Ibateguara', 'Igaci', 'Igreja Nova', 'Inhapi', 'Jacaré dos Homens', 'Jacuípe',
        'Japaratinga', 'Jaramataia', 'Jequiá da Praia', 'Joaquim Gomes', 'Jundiá', 'Junqueiro', 'Lagoa da Canoa', 'Limoeiro de Anadia',
        'Maceió', 'Major Isidoro', 'Mar Vermelho', 'Maragogi', 'Maravilha', 'Marechal Deodoro', 'Maribondo', 'Mata Grande', 'Matriz de Camaragibe',
        'Messias', 'Minador do Negrão', 'Monteirópolis', 'Murici', 'Novo Lino', 'Olho d\'Água das Flores', 'Olho d\'Água do Casado', 'Olho d\'Água Grande',
        'Olivença', 'Ouro Branco', 'Palestina', 'Palmeira dos Índios', 'Pão de Açúcar', 'Pariconha', 'Paripueira', 'Passo de Camaragibe', 'Paulo Jacinto',
        'Penedo', 'Piaçabuçu', 'Pilar', 'Pindoba', 'Piranhas', 'Poço das Trincheiras', 'Porto Calvo', 'Porto de Pedras', 'Porto Real do Colégio',
        'Quebrangulo', 'Rio Largo', 'Roteiro', 'Santa Luzia do Norte', 'Santana do Ipanema', 'Santana do Mundaú', 'São Brás', 'São José da Laje',
        'São José da Tapera', 'São Luís do Quitunde', 'São Miguel dos Campos', 'São Miguel dos Milagres', 'São Sebastião', 'Satuba', 'Senador Rui Palmeira',
        'Tanque d\'Arca', 'Taquarana', 'Teotônio Vilela', 'Traipu', 'União dos Palmares', 'Viçosa'
      ],
      'Amapá': [
        'Macapá', 'Santana', 'Laranjal do Jari', 'Amapá', 'Calçoene', 'Cutias', 'Ferreira Gomes', 'Itaubal', 'Mazagão', 'Oiapoque',
        'Pedra Branca do Amapari', 'Porto Grande', 'Pracuúba', 'Serra do Navio', 'Tartarugalzinho', 'Vitória do Jari'
      ],
      'Amazonas': [
        'Manaus', 'Parintins', 'Itacoatiara', 'Manacapuru', 'Coari', 'Tefé', 'Tabatinga',
        'Humaitá', 'Iranduba', 'São Gabriel da Cachoeira', 'Maués', 'Benjamin Constant',
        'Careiro', 'Borba', 'Autazes', 'Eirunepé', 'Rio Preto da Eva', 'Barreirinha', 'Manicoré',
        'Presidente Figueiredo', 'Santo Antônio do Içá', 'Boca do Acre', 'Nova Olinda do Norte',
        'Fonte Boa', 'Tonantins', 'São Paulo de Olivença', 'Uarini', 'Urucurituba', 'Anamã',
        'São Sebastião do Uatumã', 'São Gabriel da Cachoeira', 'Amaturá', 'Japurá', 'Jutaí',
        'Urucará', 'Atalaia do Norte', 'Alvarães', 'Carauari', 'Manaquiri', 'Beruri',
        'Juruá', 'Novo Airão', 'Novo Aripuanã', 'Canutama', 'Envira', 'Itapiranga', 'Nova Bandeirante',
        'Pauini', 'Silves', 'Itamarati', 'Tapauá', 'Codajás', 'Guajará', 'Japurá', 'Juruti',
        'Lábrea', 'Santa Isabel do Rio Negro', 'São Felipe', 'Boa Vista do Ramos', 'Codajás',
        'Uarini', 'Barcelos', 'Novo Remanso', 'Parintins', 'Novo Aripuanã', 'São Paulo de Olivença',
        'Jutaí', 'Eirunepé', 'Itapiranga', 'Tapauá', 'Boca do Acre', 'Borba', 'Barreirinha',
        'São Gabriel da Cachoeira', 'Maués', 'Carauari', 'Tefé', 'Santo Antônio do Içá',
        'Humaitá', 'Benjamin Constant', 'Manacapuru', 'Tabatinga', 'Itacoatiara', 'Coari', 'Manaus'
    ],
      'Bahia': [
        'Salvador', 'Feira de Santana', 'Vitória da Conquista', 'Camaçari', 'Itabuna',
        'Ilhéus', 'Jequié', 'Lauro de Freitas', 'Teixeira de Freitas', 'Alagoinhas', 'Barreiras',
        'Porto Seguro', 'Simões Filho', 'Paulo Afonso', 'Santo Antônio de Jesus', 'Valença',
        'Candeias', 'Itapetinga', 'Jacobina', 'Guanambi', 'Senhor do Bonfim', "Dias d'Ávila",
        'Luís Eduardo Magalhães', 'Irecê', 'Itaberaba', 'Serrinha', 'Campo Formoso', 'Cruz das Almas',
        'Catu', 'Xique-Xique', 'Ipiaú', 'Brumado', 'Esplanada', 'Conceição do Coité', 'Itamaraju',
        'Ilhéus', 'Itaparica', 'Medeiros Neto', 'Livramento de Nossa Senhora', 'Mata de São João',
        'Valente', 'Ipirá', 'Eunápolis', 'Jaguarari', 'Mucuri', 'Miguel Calmon', 'Cachoeira',
        'Seabra', 'Ibotirama', 'Itapicuru', 'Santa Cruz Cabrália', 'Barra', 'Iguaí', 'Itajuípe',
        'Piritiba', 'Santa Maria da Vitória', 'Amargosa', 'Jeremoabo', 'Gandu', 'Canavieiras',
        'Itarantim', 'Ubaitaba', 'Igaporã', 'Riachão do Jacuípe', 'Entre Rios', 'Bom Jesus da Lapa',
        'Jitaúna', 'Governador Mangabeira', 'Poções', 'Conceição do Jacuípe', 'Mutuípe', 'Belmonte',
        'Ibirapitanga', 'Itabela', 'Maragogipe', 'Paramirim', 'Porto Seguro', 'Rio Real', 'Itacaré',
        'São Francisco do Conde', 'Amélia Rodrigues', 'Iraquara', 'Planaltino', 'Teodoro Sampaio',
        'São Desidério', 'Cícero Dantas', 'Itororó', 'Itaju do Colônia', 'Itapé', 'Carinhanha',
        'Barra do Rocha', 'Tucano', 'Ubaíra', 'Saubara', 'Pilão Arcado', 'Lapão', 'Nilo Peçanha',
        'São Gonçalo dos Campos', 'Curaçá', 'Antônio Cardoso', 'Itapetinga', 'Pé de Serra', 'Central'
    ],
      'Ceará': [
        'Fortaleza', 'Caucaia', 'Juazeiro do Norte', 'Maracanaú', 'Sobral', 'Crato',
        'Itapipoca', 'Maranguape', 'Iguatu', 'Quixadá', 'Canindé', 'Pacajus', 'Quixeramobim',
        'Icó', 'Tianguá', 'Crateús', 'Aquiraz', 'Aracati', 'Ipu', 'Cascavel', 'Horizonte',
        'Camocim', 'Acaraú', 'Icó', 'Crateús', 'Russas', 'Redenção', 'Barbalha', 'Eusébio',
        'Morada Nova', 'Pacatuba', 'Limoeiro do Norte', 'Tauá', 'Itapajé', 'Mombaça', 'Icapuí',
        'Itarema', 'Santa Quitéria', 'Várzea Alegre', 'Granja', 'Varjota', 'Massapê', 'Guaraciaba do Norte',
        'Campos Sales', 'Jaguaribe', 'São Benedito', 'Ubajara', 'Ibiapina', 'Nova Russas', 'Boa Viagem',
        'Santana do Acaraú', 'Parambu', 'Salitre', 'Ipueiras', 'Pentecoste', 'Beberibe', 'Jijoca de Jericoacoara',
        'Forquilha', 'Independência', 'Acopiara', 'Ocara', 'Aracoiaba', 'Jucás', 'Brejo Santo', 'Pindoretama',
        'Mauriti', 'Santa Cecília', 'Horizonte', 'Irauçuba', 'Trairi', 'Chaval', 'Guaiúba', 'Itaitinga',
        'Guaraciaba do Norte', 'Itapagé', 'Caririaçu', 'Itapipoca', 'Solonópole', 'Tamboril', 'Alcântaras',
        'Ararendá', 'Hidrolândia', 'Reriutaba', 'Senador Pompeu', 'Ipaporanga', 'Tejuçuoca', 'Apuiarés',
        'Chorozinho', 'Itaiçaba', 'Jijoca de Jericoacoara', 'Missão Velha', 'Acarape', 'Ererê', 'Granjeiro',
        'Jaguaribara', 'Jaguaruana', 'Palmácia', 'Pereiro', 'Potiretama', 'Quiterianópolis', 'Saboeiro'
    ],
      'Distrito Federal': [
        'Brasília'
    ],
      'Espírito Santo': [
        'Vitória', 'Vila Velha', 'Serra', 'Cariacica', 'Cachoeiro de Itapemirim', 'Linhares',
        'Guarapari', 'Colatina', 'Itapemirim', 'Nova Venécia', 'Aracruz', 'Viana', 'Barra de São Francisco',
        'Santa Maria de Jetibá', 'Castelo', 'Conceição da Barra', 'São Mateus', 'Alegre', 'Domingos Martins',
        'Afonso Cláudio', 'Marataízes', 'Baixo Guandu', 'Guaçuí', 'Mimoso do Sul', 'Ibatiba', 'Jaguaré',
        'Iconha', 'Ecoporanga', 'Iúna', 'Anchieta', 'Muniz Freire', 'Pancas', 'Piúma', 'São Gabriel da Palha',
        'Marechal Floriano', 'Rio Bananal', 'Sooretama', 'João Neiva', 'Ibiraçu', 'Montanha', 'Pinheiros',
        'Afonso Cláudio', 'Santa Leopoldina', 'Vargem Alta', 'Água Doce do Norte', 'Apiacá', 'Águia Branca',
        'Boa Esperança', 'Irupi', 'Itarana', 'São Roque do Canaã', 'Ibatiba', 'Santa Teresa', 'Alto Rio Novo',
        'Ibitirama', 'Laranja da Terra', 'Itaguaçu', 'Ponto Belo', 'Atílio Vivácqua', 'Jeriсoacoara', 'Itapemirim',
        'Piaçu', 'Itarana', 'Itararé', 'Ribeirão Bonito', 'Jardim Itararé', 'Conquista', 'Ipatinga', 'Anápolis', 
        'Goianinha', 'Cristalina', 'Cariacica', 'Vila Velha', 'Serra', 'Vitória', 'Governador Valadares', 
        'Viana', 'Guarapari', 'Cachoeiro de Itapemirim', 'Cubatão', 'Colatina', 'Mimoso do Sul', 'Guarulhos', 
        'João Neiva', 'Linhares', 'São Mateus', 'Alegre', 'Ecoporanga', 'Afonso Cláudio', 'Barra de São Francisco'
    ],
      'Goiás': [
        'Goiânia', 'Aparecida de Goiânia', 'Anápolis', 'Rio Verde', 'Águas Lindas de Goiás', 'Valparaíso de Goiás',
        'Luziânia', 'Trindade', 'Formosa', 'Novo Gama', 'Jataí', 'Caldas Novas', 'Itumbiara', 'Senador Canedo',
        'Catalão', 'Planaltina', 'Santo Antônio do Descoberto', 'Goianésia', 'Inhumas', 'Mineiros', 'Hidrolândia',
        'Quirinópolis', 'Cristalina', 'Porangatu', 'Jaraguá', 'Itaberaí', 'Niquelândia', 'Uruaçu', 'Bela Vista de Goiás',
        'Ceres', 'Goianira', 'Iporá', 'Pires do Rio', 'Anicuns', 'Alexânia', 'Morrinhos', 'Palmeiras de Goiás',
        'Campos Belos', 'São Luís de Montes Belos', 'Corumbá de Goiás', 'Cavalcante', 'Itapaci', 'Cidade Ocidental',
        'Goiatuba', 'Caiapônia', 'Alto Paraíso de Goiás', 'Minaçu', 'Crixás', 'Cocalzinho de Goiás', 'Pirenópolis',
        'Padre Bernardo', 'Três Ranchos', 'Rialma', 'Cachoeira Alta', 'Pirenópolis', 'Itapirapuã', 'Silvânia',
        'São Miguel do Araguaia', 'Aragoiânia', 'Palmeiras de Goiás', 'Belém de Goiás', 'Aragarças', 'Heitoraí',
        'Indiara', 'Piracanjuba', 'Goiás', 'Aruanã', 'Jussara', 'Corumbaíba', 'Ipameri', 'Iaciara', 'Arenópolis',
        'Varjão', 'Firminópolis', 'Fazenda Nova', 'Água Limpa', 'Guapó', 'Abadia de Goiás', 'Serranópolis', 'Palmelo',
        'Cezarina', 'Doverlândia', 'Goiandira', 'Três Ranchos', 'Cristianópolis', 'Divinópolis de Goiás', 'Santa Helena de Goiás',
        'Alto Horizonte', 'Barro Alto', 'Itajá', 'Santa Isabel', 'Santa Terezinha de Goiás', 'Taquaral de Goiás',
        'Montividiu do Norte', 'São Francisco de Goiás', 'Buriti de Goiás', 'Cabeceiras', 'Vianópolis'
    ],
      'Maranhão': [
        'São Luís', 'Imperatriz', 'São José de Ribamar', 'Caxias', 'Timon', 'Codó', 'Paço do Lumiar',
        'Açailândia', 'Santa Inês', 'Bacabal', 'Balsas', 'Barra do Corda', 'Pinheiro', 'Chapadinha',
        'Codozinho', 'Santa Luzia', 'Grajaú', 'Itapecuru Mirim', 'Coroatá', 'Barreirinhas', 'Lago da Pedra',
        'Viana', 'Coelho Neto', 'Presidente Dutra', 'Vargem Grande', 'São Mateus do Maranhão', 'Zé Doca',
        'Tutóia', 'Pedreiras', 'Santa Helena', 'Bom Jardim', 'Humberto de Campos', 'Esperantinópolis',
        'Bacuri', 'Colinas', 'Riachão', 'Carolina', 'Tasso Fragoso', 'Palmeirândia', 'Vitória do Mearim',
        'Pindaré-Mirim', 'Alcântara', 'Cururupu', 'Cantanhede', 'Timbiras', 'Igarapé do Meio', 'São Bento',
        'Axixá', 'Arari', 'Pio XII', 'Santa Rita', 'Buriticupu', 'Joselândia', 'Matões', 'São João dos Patos',
        'Tutoia', 'Brejo', 'Barão de Grajaú', 'Anajatuba', 'Bequimão', 'Miranda do Norte', 'Aldeias Altas',
        'Vila Nova dos Martírios', 'Capinzal do Norte', 'Vitorino Freire', 'Lima Campos', 'Bom Jesus das Selvas',
        'Itinga do Maranhão', 'Poção de Pedras', 'Santa Quitéria do Maranhão', 'Tufilândia', 'Governador Eugênio Barros',
        'Governador Newton Bello', 'Lago dos Rodrigues', 'São João do Sóter', 'Amapá do Maranhão', 'Pedro do Rosário',
        'Benedito Leite', 'Água Doce do Maranhão', 'Vila Nova dos Martírios', 'Governador Newton Bello', 'Governador Eugênio Barros',
        'Centro do Guilherme', 'Santa Filomena do Maranhão', 'Governador Newton Bello', 'Governador Eugênio Barros', 'Vila Nova dos Martírios'
    ],
      'Mato Grosso': [
        'Cuiabá', 'Várzea Grande', 'Rondonópolis', 'Sinop', 'Tangará da Serra', 'Cáceres', 'Sorriso',
        'Lucas do Rio Verde', 'Primavera do Leste', 'Barra do Garças', 'Alta Floresta', 'Nova Mutum',
        'Pontes e Lacerda', 'Aripuanã', 'Campo Verde', 'Juína', 'Colniza', 'Barra do Bugres', 'Peixoto de Azevedo',
        'Confresa', 'Jaciara', 'Rosário Oeste', "Mirassol d'Oeste", 'Poconé', 'Sapezal', 'Diamantino',
        'Alto Araguaia', 'Comodoro', 'Nortelândia', 'Guiratinga', 'Itiquira', 'Juscimeira', 'Alto Taquari',
        'Vera', 'Campo Novo do Parecis', 'Nova Canaã do Norte', 'Paranatinga', 'Nova Olímpia', 'Nova Xavantina',
        'Brasnorte', 'Campinápolis', 'Gaúcha do Norte', 'Tabaporã', 'Cláudia', 'Canarana', 'Nova Bandeirantes',
        'Arenápolis', 'Santo Antônio do Leste', 'Diamantino', 'Nobres', 'São José do Rio Claro', 'Juruena',
        'Feliz Natal', 'Denise', 'Itanhangá', 'Jangada', 'Barão de Melgaço', 'Novo São Joaquim', 'Castanheira',
        'Reserva do Cabaçal', 'Cocalinho', 'Nova Nazaré', 'Nossa Senhora do Livramento', 'Rosário Oeste', 'Tesouro',
        'Porto Alegre do Norte', 'Torixoréu', 'Planalto da Serra', 'Ribeirão Cascalheira', 'São Pedro da Cipa',
        'Acorizal', 'Nova Brasilândia', 'Vale de São Domingos', "Figueirópolis d'Oeste", 'Indiavaí', 'Torixoréu', 'Santa Carmem'
    ],
      'Mato Grosso do Sul': [
        'Campo Grande', 'Dourados', 'Três Lagoas', 'Corumbá', 'Ponta Porã', 'Sidrolândia', 'Naviraí',
        'Maracaju', 'Nova Andradina', 'Aquidauana', 'Amambai', 'Rio Brilhante', 'Coxim', 'Caarapó',
        'Miranda', 'Aparecida do Taboado', 'Bonito', 'São Gabriel do Oeste', 'Chapadão do Sul', 'Paranaíba',
        'Fátima do Sul', 'Nova Alvorada do Sul', 'Bataguassu', 'Ivinhema', 'Coronel Sapucaia', 'Jardim',
        'Bela Vista', 'Cassilândia', 'Guia Lopes da Laguna', 'Angélica', 'Itaporã', 'Porto Murtinho',
        'Ribas do Rio Pardo', 'Corguinho', 'Dois Irmãos do Buriti', 'Tacuru', 'Sete Quedas', 'Glória de Dourados',
        'Sonora', 'Figueirão', 'Ladário', 'Inocência', 'Deodápolis', 'Coxim', 'Japorã', 'Itaquiraí',
        'Paranhos', 'Pedro Gomes', 'Rochedo', 'Rio Negro', 'Jaraguari', 'Novo Horizonte do Sul', 'Cassilândia',
        'Paraíso das Águas', 'Selvíria', 'Nova Andradina', 'Bodoquena', 'Dois Irmãos do Buriti', 'Tacuru', 'Corguinho',
        'Costa Rica', 'Itaquiraí', 'Paranhos', 'Figueirão', 'Rio Negro', 'Rochedo', 'Nova Alvorada do Sul', 'Japorã',
        'Sete Quedas', 'Inocência', 'Angélica', 'Sonora', 'Cassilândia', 'Coxim', 'Novo Horizonte do Sul', 'Ladário', 'Itaporã'
    ],
      'Minas Gerais': [
        'Belo Horizonte', 'Uberlândia', 'Contagem', 'Betim', 'Montes Claros', 'Ribeirão das Neves', 'Uberaba',
        'Governador Valadares', 'Ipatinga', 'Santa Luzia', 'Sete Lagoas', 'Divinópolis', 'Ibirité', 'Poços de Caldas',
        'Patos de Minas', 'Teófilo Otoni', 'Sabará', 'Pouso Alegre', 'Igarapé', 'Varginha', 'Ipaba', 'Juiz de Fora',
        'Nova Lima', 'Araguari', 'Lavras', 'Itabira', 'Vespasiano', 'Conselheiro Lafaiete', 'Itajubá', 'Araxá',
        'Passos', 'Januária', 'Viçosa', 'Formiga', 'Barbacena', 'Pará de Minas', 'Muriaé', 'Itaúna', 'Alfenas',
        'Ituiutaba', 'Paracatu', 'Ponte Nova', 'Bocaiúva', 'Unaí', 'Frutal', 'Caratinga', 'Itabirito', 'Timóteo',
        'Esmeraldas', 'Iturama', 'São João del Rei', 'Lagoa Santa', 'Ouro Preto', 'Pedro Leopoldo', 'Barão de Cocais',
        'Catalão', 'Cataguases', 'Oliveira', 'Luz', 'Três Corações', 'João Monlevade', 'Congonhas', 'Manhuaçu',
        'Ipanema', 'Guaxupé', 'Monte Carmelo', 'Leopoldina', 'Monte Azul', 'Igaratinga', 'Unaí', 'Arinos', 'Curvelo',
        'Abaeté', 'Bom Despacho', 'João Pinheiro', 'Diamantina', 'Pirapora', 'São Gotardo', 'Janaúba', 'Mariana',
        'São Lourenço', 'Resende Costa', 'Caeté', 'Matozinhos', 'Salinas', 'Araguari', 'Sabará', 'Igarapé', 'Capelinha',
        'Itaúna', 'Abaeté', 'Passos', 'Almenara', 'Bom Despacho', 'Patrocínio', 'Visconde do Rio Branco', 'Carangola',
        'Cambuí', 'Monte Sião', 'Caxambu', 'Aiuruoca', 'Turmalina', 'São João Nepomuceno', 'Conceição das Alagoas',
        'Conceição do Mato Dentro', 'Formiga', 'Congonhas', 'Pompéu', 'Congonhas', 'Itambacuri', 'Santos Dumont', 'Juiz de Fora'
    ],
      'Pará': [
        'Belém', 'Ananindeua', 'Santarém', 'Marabá', 'Castanhal', 'Parauapebas', 'Abaetetuba',
        'Araguaína', 'Tucuruí', 'Marituba', 'Itaituba', 'Barcarena', 'Altamira', 'Cametá',
        'Paragominas', 'Bragança', 'Tucumã', 'Benevides', 'Capanema', 'Igarapé-Miri', 'Redenção',
        'Moju', 'Óbidos', 'Breves', 'Novo Progresso', 'Oriximiná', 'Afuá', 'Cachoeira do Arari',
        'Jacundá', 'Capitão Poço', 'Viseu', 'São Félix do Xingu', 'Portel', 'Conceição do Araguaia',
        'Prainha', 'Salinópolis', 'São Geraldo do Araguaia', 'Uruará', 'Monte Alegre', 'Dom Eliseu',
        'Almeirim', 'Mocajuba', 'Juruti', 'Acará', 'Ulianópolis', 'Santa Maria do Pará', 'Bagre',
        'Oeiras do Pará', 'Medicilândia', 'Melgaço', 'São Domingos do Capim', 'Augusto Corrêa', 'Senador José Porfírio',
        'Concórdia do Pará', 'Santa Isabel do Pará', 'Breu Branco', 'Porto de Moz', 'Curuçá', 'Tomé-Açu', 'Baião',
        'Anajás', 'Aveiro', 'Alenquer', 'Floresta do Araguaia', 'Trairão', 'Chaves', 'Curralinho', 'Chapadinha',
        'Gurupá', 'Santa Luzia do Pará', 'Porto de Moz', 'Irituia', 'Muaná', 'Pacajá', 'Vigia', 'Placas', 'Ulianópolis',
        'Jacareacanga', 'Barra do Corda', 'Canindé do São Francisco', 'Cantanhede', 'Cidelândia', 'Porto de Moz', 'Parauapebas',
        'Cametá', 'Anajás', 'Breves', 'Tucumã', 'Afuá', 'Salvaterra', 'Igarapé-Açu', 'Igarapé-Miri', 'Mocajuba', 'Oriximiná'
    ],
      'Paraíba': [
        'João Pessoa', 'Campina Grande', 'Santa Rita', 'Patos', 'Bayeux', 'Cabedelo', 'Cajazeiras',
        'Sousa', 'Sumé', 'Guarabira', 'Pombal', 'Itabaiana', 'Mamanguape', 'Queimadas', 'Conde',
        'Esperança', 'Rio Tinto', 'Itaporanga', 'Pedras de Fogo', 'Solânea', 'Alagoa Grande', 'Araruna',
        'Catolé do Rocha', 'Cuité', 'Bananeiras', 'Alagoa Nova', 'Monteiro', 'Alagoinha', 'Piancó',
        'Caldas Brandão', 'São Bento', 'Tacima', 'Brejo do Cruz', 'Barra de Santa Rosa', 'Teixeira',
        'São José do Sabugi', 'Uiraúna', 'Ingá', 'Itapororoca', 'Picuí', 'Santa Luzia', 'Pedro Régis',
        'Desterro', 'Pocinhos', 'Juripiranga', 'Arara', 'São Mamede', 'Cacimba de Dentro', 'Puxinanã',
        'Conceição', 'São João do Rio do Peixe', 'Belém', 'Soledade', 'Santa Helena', 'Riachão do Bacamarte',
        'Itatuba', 'São João do Tigre', 'Boqueirão', 'Serra Branca', 'Coremas', 'São Bento', 'São João do Cariri',
        'Aroeiras', 'Areia', 'Cubati', 'Juru', 'Lagoa Seca', 'Alagoa Nova', 'São Sebastião do Umbuzeiro', 'Serra Redonda',
        'Caraúbas', 'São Vicente do Seridó', 'Serra Grande', 'São Domingos do Cariri', 'Zabelê', 'Taperoá', 'Tavares',
        'Tacima', 'Tavares', 'Tenório', 'Triunfo', 'Umbuzeiro', 'Vieirópolis', 'Zabelê', 'Lastro', 'Mato Grosso'
    ],
      'Paraná': [
        'Curitiba', 'Londrina', 'Maringá', 'Ponta Grossa', 'Cascavel', 'São José dos Pinhais', 'Foz do Iguaçu',
        'Colombo', 'Guarapuava', 'Paranaguá', 'Apucarana', 'Toledo', 'Pinhais', 'Araucária', 'Campo Largo',
        'Fazenda Rio Grande', 'Cianorte', 'Colombo', 'Umuarama', 'Piraquara', 'Apucarana', 'Cambé', 'Sarandi',
        'Paranavaí', 'Irati', 'Telêmaco Borba', 'Pato Branco', 'Campo Mourão', 'Valinhos', 'Irati', 'Francisco Beltrão',
        'Dois Vizinhos', 'Paranaguá', 'Guaíra', 'Laranjeiras do Sul', 'Marechal Cândido Rondon', 'Arapongas',
        'Pinhais', 'Cianorte', 'Assis Chateaubriand', 'Palmas', 'Jandaia do Sul', 'Rolândia', 'Medianeira', 'Rio Branco do Sul',
        'São Mateus do Sul', 'Jaguariaíva', 'Matinhos', 'Santo Antônio da Platina', 'Tibagi', 'Palmeira', 'Mandaguari',
        'Guaratuba', 'Jataizinho', 'Palotina', 'Astorga', 'Santo Antônio do Sudoeste', 'São Miguel do Iguaçu',
        'Porecatu', 'Dois Vizinhos', 'Jaguapitã', 'Pinhão', 'Colorado', 'Cerro Azul', 'Pitanga', 'Assaí', 'Nova Aurora',
        'Joaquim Távora', 'Santa Helena', 'Fernandes Pinheiro', 'Corbélia', 'Prudentópolis', 'Clevelândia', 'Centenário do Sul',
        'Santa Terezinha de Itaipu', 'Florestópolis', 'Cândido de Abreu', 'Kaloré', 'Leópolis', 'Pato Bragado',
        'Ibiporã', 'Campo do Tenente', 'Cafelândia', 'Andirá', 'Cafelândia', 'Maripá', 'Assis Chateaubriand',
        'Porto Amazonas', 'Cruzmaltina', 'Céu Azul', 'Arapongas', 'Nova Prata do Iguaçu', 'Planalto', 'Altamira do Paraná'
    ],
      'Pernambuco': [
        'Recife', 'Jaboatão dos Guararapes', 'Olinda', 'Caruaru', 'Petrolina', 'Paulista', 'Cabo de Santo Agostinho',
        'Camaragibe', 'Garanhuns', 'Vitória de Santo Antão', 'Igarassu', 'São Lourenço da Mata', 'Santa Cruz do Capibaribe',
        'Abreu e Lima', 'Ipojuca', 'Serra Talhada', 'Araripina', 'Gravatá', 'Carpina', 'Goiana', 'Arcoverde', 'Pesqueira',
        'Belo Jardim', 'Surubim', 'Buíque', 'Palmares', 'Bezerros', 'Ouricuri', 'Timbaúba', 'Bom Conselho', 'Bom Jardim',
        'Belo Jardim', 'Cupira', 'Santa Maria da Boa Vista', 'Floresta', 'Escada', 'Lajedo', 'Bodocó', 'Paudalho',
        'Limoeiro', 'Moreno', 'Afogados da Ingazeira', 'Catende', 'Itapissuma', 'Exu', 'Ribeirão', 'Lagoa do Carro',
        'Cortês', 'Tamandaré', 'Lagoa Grande', 'Canhotinho', 'São José do Egito', 'Jurema', 'Água Preta', 'Santa Cruz',
        'Santa Cruz da Baixa Verde', 'Cedro', 'Condado', 'Tupanatinga', 'Itaíba', 'Jupi', 'Triunfo', 'Ingazeira',
        'Barreiros', 'Iati', 'Quipapá', 'Brejinho', 'Solidão', 'Vertente do Lério', 'Quixaba', 'Vertentes',
        'Alagoinha', 'Carnaubeira da Penha', 'Calumbi', 'Betânia', 'Santa Filomena', 'Santa Cruz da Baixa Verde', 'Itapetim',
        'Tabira', 'Serrita', 'Sertânia', 'Granito', 'Mirandiba', 'Cedro', 'Moreilândia', 'Arcoverde', 'Salgueiro', 'Terra Nova',
        'Verdejante', 'Parnamirim', 'Flores', 'Carnaíba', 'Trindade', 'Brejão', 'Brejo da Madre de Deus', 'Santa Maria do Cambucá'
    ],
      'Piauí': [
        'Teresina', 'Parnaíba', 'Picos', 'Floriano', 'Campo Maior', 'Piripiri', 'Barras', 'Oeiras',
        'Esperantina', 'Altos', 'José de Freitas', 'Pedro II', 'Miguel Alves', 'Batalha', 'Luzilândia',
        'União', 'Cocal', 'São Raimundo Nonato', 'Pio IX', 'Piracuruca', 'Campo Maior', 'Valença do Piauí',
        'Canto do Buriti', 'Castelo do Piauí', 'Piripiri', 'Barras', 'Oeiras', 'Monsenhor Gil', 'Fronteiras',
        'Miguel Alves', 'Paulistana', 'Esperantina', 'Batalha', 'Cocal', 'Luís Correia', 'Altos', 'Inhuma',
        'José de Freitas', 'Picos', 'São João do Piauí', 'Pedro II', 'Bom Jesus', 'São Miguel do Tapuio',
        'Valença do Piauí', 'Santa Rosa do Piauí', 'Corrente', 'São Raimundo Nonato', 'Simões', 'Luzilândia',
        'Uruçuí', 'Caraúbas do Piauí', 'Elesbão Veloso', 'Bom Jesus', 'Porto', 'Bocaina', 'Pimenteiras',
        'Aroazes', 'Capitão Gervásio Oliveira', 'Colônia do Piauí', 'Currais', 'São Julião', 'São João da Varjota',
        'Landri Sales', 'Campo Alegre do Fidalgo', 'Várzea Branca', 'Santa Cruz dos Milagres', 'São Lourenço do Piauí',
        'Lagoa do Barro do Piauí', 'São Gonçalo do Piauí', 'São Francisco de Assis do Piauí', 'Francisco Santos', 'Alegrete do Piauí',
        'Ribeira do Piauí', 'Jaicós', 'Barreiras do Piauí', 'Paes Landim', 'Patos do Piauí', 'Bocaina', 'Santana do Piauí',
        'Queimada Nova', 'São João do Piauí', 'São José do Peixe', 'Queimada Nova', 'São Francisco de Assis do Piauí', 'Bertolínia',
        'Colônia do Gurguéia', 'Eliseu Martins', 'Manoel Emídio', 'Barreiras do Piauí', 'Canto do Buriti', 'Santa Luz', 'Vera Mendes'
    ],
      'Rio de Janeiro': [
        'Rio de Janeiro', 'São Gonçalo', 'Duque de Caxias', 'Nova Iguaçu', 'Niterói', 'Belford Roxo', 'São João de Meriti',
        'Campos dos Goytacazes', 'Petrópolis', 'Volta Redonda', 'Magé', 'Mesquita', 'Nova Friburgo', 'Barra Mansa', 'Macaé',
        'Itaboraí', 'Resende', 'Cabo Frio', 'Nilópolis', 'Teresópolis', 'Angra dos Reis', 'Queimados', 'Araruama', 'Nova Friburgo',
        'Barra do Piraí', 'Três Rios', 'Guapimirim', 'Rio das Ostras', 'São Pedro da Aldeia', 'Itaperuna', 'Barra do Piraí',
        'Tanguá', 'Arraial do Cabo', 'Seropédica', 'São João da Barra', 'Valença', 'Paracambi', 'Rio Bonito', 'Mangaratiba',
        'Saquarema', 'Iguaba Grande', 'Paraty', 'Japeri', 'Itaocara', 'Cachoeiras de Macacu', 'Pinheiral', 'Bom Jardim',
        'Santo Antônio de Pádua', 'Rio Claro', 'Mendes', 'Italva', 'Sapucaia', 'Engenheiro Paulo de Frontin', 'Quatis',
        'Porciúncula', 'Piraí', 'Miracema', 'Vassouras', 'Natividade', 'Varre-Sai', 'Itatiaia', 'Paty do Alferes',
        'Conceição de Macabu', 'Bom Jesus do Itabapoana', 'Carapebus', 'Areal', 'Rio das Flores', 'Itaipava', 'Sumidouro',
        'Quissamã', 'Miguel Pereira', 'Conceição de Macabu', 'São Francisco de Itabapoana', 'Silva Jardim', 'Cardoso Moreira',
        'São José de Ubá', 'Aperibé', 'Santa Maria Madalena', 'Cambuci', 'São Fidélis', 'Bom Jesus do Itabapoana', 'Quatis', 'Miracema'
    ],
      'Rio Grande do Norte': [
        'Natal', 'Mossoró', 'Parnamirim', 'São Gonçalo do Amarante', 'Ceará-Mirim', 'Caicó', 'Macapá', 'Currais Novos',
        'Açu', 'Pau dos Ferros', 'Macaíba', 'Nova Cruz', 'Apodi', 'João Câmara', 'Canguaretama', 'Touros', 'Baraúna',
        'Extremoz', 'Santa Cruz', 'Apodi', 'Areia Branca', 'Ipanguaçu', 'Jardim de Piranhas', 'São Miguel', 'Mossoró',
        'São José de Mipibu', 'Jucurutu', 'Tangará', 'Lajes', 'Angicos', 'Pedro Avelino', 'Caraúbas', 'Umarizal',
        'Monte Alegre', 'Tibau', 'Lagoa Nova', 'Nova Cruz', 'São Paulo do Potengi', 'Passa e Fica', 'Jardim do Seridó',
        'Currais Novos', 'Cerro Corá', 'São Tomé', 'Serra Negra do Norte', 'Lajes Pintadas', 'Maxaranguape', 'São Miguel do Gostoso',
        'Jardim de Angicos', 'Ruy Barbosa', 'Nísia Floresta', 'Poço Branco', 'Barcelona', 'Bento Fernandes', 'Bodó',
        'São Pedro', 'Serra de São Bento', 'Senador Elói de Souza', 'São Vicente', 'Jardim do Seridó', 'São José do Seridó',
        'Jardim de Piranhas', 'Jundiá', 'Coronel Ezequiel', 'Frutuoso Gomes', 'Encanto', 'Fernando Pedroza', 'Riachuelo', 'Taipu',
        'Riacho de Santana', 'Monte das Gameleiras', 'Vera Cruz', 'São Miguel', 'Caiçara do Rio do Vento', 'Carnaubais', 'Luís Gomes',
        'Campo Redondo', 'Touros', 'Passagem', 'Santo Antônio', 'São José de Campestre', 'Santa Maria', 'São Francisco do Oeste',
        'Almino Afonso', 'Parelhas', 'Natal', 'Mossoró', 'Parnamirim', 'São Gonçalo do Amarante', 'Ceará-Mirim', 'Caicó', 'Macapá'
    ],
      'Rio Grande do Sul': [
        'Porto Alegre', 'Caxias do Sul', 'Pelotas', 'Canoas', 'Santa Maria', 'Gravataí', 'Viamão', 'Novo Hamburgo',
        'São Leopoldo', 'Rio Grande', 'Alvorada', 'Santa Cruz do Sul', 'Cachoeirinha', 'Uruguaiana', 'Bagé', 'Bento Gonçalves',
        'Erechim', 'Guaíba', 'Sapucaia do Sul', 'Santana do Livramento', 'Camaquã', 'Esteio', 'Ijuí', 'Alegrete', 'Cachoeira do Sul',
        'Farroupilha', 'Carazinho', 'Santo Ângelo', 'Vacaria', 'Santa Rosa', 'Venâncio Aires', 'Garibaldi', 'Capão da Canoa',
        'São Gabriel', 'São Borja', 'Espumoso', 'Osório', 'Torres', 'Tramandaí', 'Igrejinha', 'Palmeira das Missões', 'Taquara',
        'Encantado', 'Soledade', 'Montenegro', 'Lajeado', 'Giruá', 'São Jerônimo', 'Tapejara', 'Tapes', 'Nova Prata', 'Panambi',
        'São Lourenço do Sul', 'Butiá', 'Bom Jesus', 'São Marcos', 'Sarandi', 'Campo Bom', 'Santo Antônio da Patrulha', 'Nova Bassano',
        'Feliz', 'São Sebastião do Caí', 'Arroio do Meio', 'Santiago', 'Jaguarão', 'Serafina Corrêa', 'Agudo', 'Dom Pedrito',
        'Cruz Alta', 'Rosário do Sul', 'São Luiz Gonzaga', 'Júlio de Castilhos', 'Guaíba', 'Tupanciretã', 'São Francisco de Assis',
        'Santa Vitória do Palmar', 'Barra do Ribeiro', 'Candelária', 'Santa Cruz do Sul', 'Teutônia', 'Vera Cruz', 'Flores da Cunha',
        'Marau', 'São José do Norte', 'Ibirubá', 'Cruz Alta', 'Santa Rosa', 'Cachoeira do Sul', 'Santo Ângelo', 'Ijuí', 'São Borja',
        'Uruguaiana', 'Cruz Alta', 'São Luiz Gonzaga', 'Três de Maio', 'Santo Augusto', 'Tucunduva', 'Tupanciretã', 'Horizontina',
        'Panambi', 'Santa Maria', 'Júlio de Castilhos', 'Rosário do Sul', 'São Pedro do Sul', 'São Sepé', 'Jaguari', 'Formigueiro',
        'Itaqui', 'São Francisco de Assis', 'São Vicente do Sul', 'Uruguaiana', 'Alegrete', 'Quaraí', 'Itaqui', 'São Borja'
    ],
      'Rondônia': [
        'Porto Velho', 'Ji-Paraná', 'Ariquemes', 'Vilhena', 'Cacoal', 'Guajará-Mirim', 'Jaru', 'Rolim de Moura',
        'Pimenta Bueno', 'Ouro Preto do Oeste', 'Candeias do Jamari', 'Nova Mamoré', "Machadinho D'Oeste", 'Buritis',
        "Espigão D'Oeste", 'Presidente Médici', "Alvorada D'Oeste", 'Itapuã do Oeste', 'São Miguel do Guaporé',
        "Nova Brasilândia D'Oeste", 'Cujubim', 'Costa Marques', "Alta Floresta D'Oeste", 'São Francisco do Guaporé',
        'Colorado do Oeste', 'Cerejeiras', 'Parecis', 'Campo Novo de Rondônia', 'Theobroma', 'Nova União', 'Mirante da Serra',
        'Vale do Paraíso', 'Monte Negro', 'Nova União', 'Corumbiara', 'Pimenteiras do Oeste', 'Cabixi', 'Chupinguaia',
        'Rio Crespo', 'Alto Alegre dos Parecis', 'Alto Paraíso', 'Itapuã do Oeste'
    ],
      'Roraima': [
        'Boa Vista', 'Rorainópolis', 'Cantá', 'Caracaraí', 'Mucajaí', 'Pacaraima', 'São João da Baliza',
        'São Luiz', 'Uiramutã', 'Alto Alegre', 'Amajari', 'Normandia', 'Iracema', 'Caroebe', 'Bonfim',
        'Alto Alegre', 'Iracema', 'Caracaraí', 'São Luiz', 'Pacaraima', 'Rorainópolis', 'Uiramutã', 'Mucajaí',
        'Normandia', 'Amajari', 'Boa Vista', 'Cantá', 'Caroebe', 'Bonfim'
    ],
      'Santa Catarina': [
        'Florianópolis', 'Joinville', 'Blumenau', 'São José', 'Criciúma', 'Chapecó', 'Itajaí', 'Jaraguá do Sul',
        'Palhoça', 'Lages', 'Balneário Camboriú', 'Brusque', 'Tubarão', 'São Bento do Sul', 'Caçador', 'Concórdia',
        'Rio do Sul', 'Araranguá', 'Biguaçu', 'Navegantes', 'Camboriú', 'Capivari de Baixo', 'Mafra', 'São João Batista',
        'Canoinhas', 'Indaial', 'Herval d\'Oeste', 'Guaramirim', 'Içara', 'São Francisco do Sul', 'Laguna', 'São Miguel do Oeste',
        'Joaçaba', 'Imbituba', 'Timbó', 'Tijucas', 'Fraiburgo', 'Porto União', 'Jaguaruna', 'Pomerode', 'São Joaquim',
        'São Lourenço do Oeste', 'Videira', 'Xanxerê', 'Balneário Piçarras', 'Papanduva', 'Maravilha', 'Itapema',
        'Taió', 'Canelinha', 'Ibirama', 'Gaspar', 'Santo Amaro da Imperatriz', 'Curitibanos', 'Cocal do Sul',
        'Bombinhas', 'Luzerna', 'Água Doce'
    ],
      'São Paulo': [
        'São Paulo', 'Guarulhos', 'Campinas', 'São Bernardo do Campo', 'Santo André', 'São José dos Campos',
        'Osasco', 'Ribeirão Preto', 'Sorocaba', 'Mauá', 'São José do Rio Preto', 'Mogi das Cruzes', 'Santos',
        'Diadema', 'Jundiaí', 'Piracicaba', 'Carapicuíba', 'Bauru', 'Itaquaquecetuba', 'São Vicente', 'Suzano',
        'Taboão da Serra', 'Franca', 'Barueri', 'São Carlos', 'Embu das Artes', 'Itapevi', 'Praia Grande', 'Hortolândia',
        'Embu-Guaçu', 'Sumaré', 'São Caetano do Sul', 'Indaiatuba', 'Cotia', 'Pouso Alegre', 'Ribeirão Pires', 'Cubatão',
        'Rio Claro', 'Jacareí', 'Ferraz de Vasconcelos', 'Itapecerica da Serra', 'Itatiba', 'Catanduva', 'Americana',
        'Bragança Paulista', 'Atibaia', 'Santa Bárbara d\'Oeste', 'Itu', 'Valinhos', 'Ourinhos', 'Itapetininga',
        'Votorantim', 'Francisco Morato', 'Limeira', 'Taubaté', 'Itapira', 'Marília', 'Itapeva', 'Mogi Guaçu', 'Jaú', 'Avaré',
        'Lins', 'Mairiporã', 'Sertãozinho', 'Jandira', 'Várzea Paulista', 'Botucatu', 'Guaratinguetá', 'Barretos', 'Salto',
        'Santa Rita do Passa Quatro', 'Mococa', 'Mongaguá', 'Registro', 'Bebedouro', 'Itanhaém', 'Caieiras', 'Capão Bonito',
        'Tatuí', 'Amparo', 'Bertioga', 'Mogi Mirim', 'Cruzeiro', 'Lorena', 'Franco da Rocha', 'Pindamonhangaba',
        'São Sebastião', 'Vinhedo', 'Poá', 'Matão', 'Caraguatatuba', 'Porto Feliz', 'Ilhabela', 'Cajamar', 'Guarujá',
        'Salto de Pirapora', 'São Roque', 'Ubatuba'
    ],
      'Sergipe': [
        'Aracaju', 'Nossa Senhora do Socorro', 'Lagarto', 'Itabaiana', 'São Cristóvão', 'Estância', 'Nossa Senhora da Glória',
        'Tobias Barreto', 'Itabaianinha', 'Simão Dias', 'Umbaúba', 'Capela', 'Barra dos Coqueiros', 'Laranjeiras', 'Boquim',
        'Canindé de São Francisco', 'Poço Verde', 'Propriá', 'Nossa Senhora das Dores', 'Carmópolis', 'Lagarto', 'Itabaiana',
        'São Cristóvão', 'Estância', 'Nossa Senhora da Glória', 'Tobias Barreto', 'Itabaianinha', 'Simão Dias', 'Umbaúba',
        'Capela', 'Barra dos Coqueiros', 'Laranjeiras', 'Boquim', 'Canindé de São Francisco', 'Poço Verde', 'Propriá',
        'Nossa Senhora das Dores', 'Carmópolis', 'Nossa Senhora do Socorro'
    ],
      'Tocantins': [
        'Palmas', 'Araguaína', 'Gurupi', 'Porto Nacional', 'Paraíso do Tocantins', 'Formoso do Araguaia', 'Araguatins',
        'Colinas do Tocantins', 'Miracema do Tocantins', 'Tocantinópolis', 'Dianópolis', 'Guaraí', 'Araguaçu', 'Augustinópolis',
        'Wanderlândia', 'Xambioá', 'São Miguel do Tocantins', 'Nova Olinda', 'Peixe', 'Araguacema', 'Pium', 'Tocantínia',
        'Alvorada', 'Ananás', 'Colméia', 'Cristalândia', 'Dois Irmãos do Tocantins', 'Filadélfia', 'Natividade',
        'Palmeirópolis', 'Paranã', 'Praia Norte', 'Rio da Conceição', 'Santa Fé do Araguaia', 'Santa Tereza do Tocantins',
        'São Valério', 'Taguatinga', 'Taipas do Tocantins', 'Talismã', 'Dueré', 'Santa Rosa do Tocantins',
        'Divinópolis do Tocantins', 'Almas', 'Arapoema', 'Aurora do Tocantins', 'Axixá do Tocantins', 'Barra do Ouro',
        'Brejinho de Nazaré', 'Campos Lindos', 'Cariri do Tocantins', 'Centenário', 'Chapada da Natividade', 'Chapada de Areia',
        'Conceição do Tocantins', 'Couto Magalhães', 'Darcinópolis', 'Dianópolis', 'Divinópolis do Tocantins',
        'Dois Irmãos do Tocantins', 'Fátima', 'Figueirópolis', 'Filadélfia', 'Formoso do Araguaia', 'Fortaleza do Tabocão',
        'Goianorte', 'Goiatins', 'Guaraí', 'Gurupi', 'Ipueiras', 'Itacajá', 'Itaguatins', 'Itapiratins', 'Itaporã do Tocantins',
        'Jaú do Tocantins', 'Juarina', 'Lagoa da Confusão', 'Lagoa do Tocantins', 'Lajeado', 'Lavandeira', 'Lizarda', 'Luzinópolis',
        'Marianópolis do Tocantins', 'Mateiros', 'Maurilândia do Tocantins', 'Miracema do Tocantins', 'Miranorte', 'Monte do Carmo',
        'Monte Santo do Tocantins', 'Muricilândia', 'Nazaré', 'Nova Olinda', 'Nova Rosalândia', 'Novo Acordo', 'Novo Alegre',
        'Novo Jardim', 'Oliveira de Fátima', 'Palmeirante', 'Palmeiras do Tocantins', 'Paraíso do Tocantins', 'Paranã',
        'Pau d\'Arco', 'Pedro Afonso', 'Peixe', 'Pequizeiro', 'Pindorama do Tocantins', 'Piraquê', 'Pium',
        'Ponte Alta do Bom Jesus', 'Ponte Alta do Tocantins', 'Porto Alegre do Tocantins', 'Porto Nacional',
        'Praia Norte', 'Presidente Kennedy', 'Pugmil', 'Recursolândia', 'Riachinho', 'Rio da Conceição', 'Rio dos Bois',
        'Rio Sono', 'Sampaio', 'Sandolândia', 'Santa Fé do Araguaia', 'Santa Maria do Tocantins', 'Santa Rita do Tocantins',
        'Santa Rosa do Tocantins', 'Santa Tereza do Tocantins', 'Santa Terezinha do Tocantins', 'São Bento do Tocantins',
        'São Félix do Tocantins', 'São Miguel do Tocantins', 'São Salvador do Tocantins', 'São Sebastião do Tocantins',
        'São Valério da Natividade', 'Silvanópolis', 'Sítio Novo do Tocantins', 'Sucupira', 'Taguatinga', 'Taipas do Tocantins',
        'Talismã', 'Tocantínia', 'Tocantinópolis', 'Tupirama', 'Tupiratins', 'Wanderlândia', 'Xambioá'
    ],
    };
  
    return cities[state] || [];
  }

  updateCitySelect(){
    this.editedProfile.endereco.cidade = this.getCityOptions(this.editedProfile.endereco.estado)[0];
  }

  getStateOptions(): string[] {
    return [
      'Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia',
      'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão',
      'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba',
      'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte',
      'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo',
      'Sergipe', 'Tocantins'
    ];
  }

  getSeniorityOptions(): string[] {
    return ['Estágio', 'Trainee', 'Júnior', 'Pleno', 'Sênior', "Especialista"];
  }

  verifyInfos() {
    if (this.pageType == 'professional-profile') {
      if (this.editedProfile.nomeCompleto.trim() == '' ||
          !this.editedProfile.nomeCompleto.match(/^[a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ. ]+$/) ||
          this.idade <= 0 ||
          this.editedProfile.endereco.cidade == '' ||
          this.editedProfile.endereco.estado == '' ||
          this.editedProfile.contato.email.trim() == '' ||
          this.editedProfile.contato.telefone.trim() == '' ||
          this.editedProfile.contato.telefone.length < 14 ||
          this.editedProfile.senioridade == '' ||
          !this.isEmailValid()) {
        return this.isValid = false;
      } else {
        return this.isValid = true;
      }
    } else if (this.pageType == 'business-profile') {
      if (this.editedProfile.nomeFantasia.trim() == '' ||
          this.editedProfile.endereco.cidade == '' ||
          this.editedProfile.endereco.estado == '' ||
          this.editedProfile.contato.email.trim() == '' ||
          this.editedProfile.contato.telefone.length < 14 ||
          !this.isEmailValid()) {
        return this.isValid = false;
      } else {
        return this.isValid = true;
      }
    }
    return false;
  }

  applyPhoneMask(event: any): void {
    const input = this.numberMask(event);

    let numericInput = input.replace(/[^0-9]/g, '');
  
    if (numericInput.length <= 10) {
      numericInput = numericInput.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    } else {
      numericInput = numericInput.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }

    this.editedProfile.contato.telefone = numericInput;
  }

  numberMask(event: any){
    event.target.value = event.target.value.replace(/[^0-9]/g, '');
    return event.target.value;
  }

  isEmailValid(){
    let email = this.editedProfile.contato.email;
    if (email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]/g)){
      this.errMsg = '';
      return true;
    } else {
      this.errMsg = 'Email inválido';
      return false;
    }
  }

  formatSelectValue(input: string): string {
    return input.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase();
  }
}
