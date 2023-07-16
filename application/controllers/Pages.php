<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Pages extends CI_Controller {

	//change it to en/it/ro depending on domain
	public $defaultLanguage = "ro";

	public function __construct()
	{
		parent::__construct();
	}

	public function index()
	{
		$this->lw('index');
	}

	public function contact()
	{
		$this->lw('contact');
	}

	public function team()
	{
		$this->lw('team');
	}

	public function prices()
	{
		$this->lw('prices');
	}

	public function cases()
	{
		$this->lw('cases');
	}

	public function reviews()
	{
		$this->lw('reviews');
	}

	public function sl($idLang) {
		$this->session->set_userdata('PREFLANG', $idLang);
		redirect($_SERVER['HTTP_REFERER']);
	}

//	servicii
	public function est()
	{
		$this->lw('est');
	}


	/*
	 *  Custom Load View Function for language system
	 *  View is the name of the page that is loaded
	 *  $lang will be set to a default of "ro" = romanian but will be replaced if a session regarding the language is found
	 *  If the view doesn't exist we will load the default version of the page which is romanian
	 * */
	public function lw($view) {
		//get session data
		$sessionLang = $this->session->userdata('PREFLANG') ?? $this->defaultLanguage;

		//check if file is available for that language
		$headPath   = APPPATH . 'views/modules/' . $sessionLang . "/head.php";
		$filePath   = APPPATH . 'views/pages/' . $sessionLang . "/" . $view . '.php';
		$footerPath = APPPATH . 'views/modules/' . $sessionLang . "/footer.php";

		//check if all language files are present
		if (file_exists($headPath) && file_exists($filePath) && file_exists($footerPath) ) {
			$this->load->view('modules/' . $sessionLang . '/head');
			$this->load->view('pages/' . $sessionLang . '/' . $view);
			$this->load->view('modules/' . $sessionLang . '/footer');
		}else {
			$this->load->view('modules/' . $this->defaultLanguage . '/head');
			$this->load->view('pages/' . $this->defaultLanguage . '/' . $view);
			$this->load->view('modules/' . $this->defaultLanguage . '/footer');
		}

	}
}
