<?php
/**
 * Created by PhpStorm.
 * User: falbernaz
 * Date: 13/09/2016
 * Time: 15:52.
 */
namespace App\Http\Controllers;

use App\Repositories\DataRepository;
use App\Repositories\UsersRepository;
use App\User;
use Illuminate\Http\Request;

class VueItemController extends Controller
{
    private $dataRepository;

    public function __construct(UsersRepository $usersRepository, DataRepository $dataRepository)
    {
        $this->usersRepository = $usersRepository;
        $this->dataRepository = $dataRepository;
    }

    public function manageVue()
    {
        $states = $this->dataRepository->getStates();
        //State::pluck('nome', 'uf');
        $roles = $this->dataRepository->getRoles();
        //Role::pluck('role', 'id');

        return view('manage-vue')->with(compact('states'))->with(compact('roles'));
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $items = User::latest()->paginate(20);

        $response = [
            'pagination' => [
                'total'        => $items->total(),
                'per_page'     => $items->perPage(),
                'current_page' => $items->currentPage(),
                'last_page'    => $items->lastPage(),
                'from'         => $items->firstItem(),
                'to'           => $items->lastItem(),
            ],
            'data' => $items,
        ];

        return response()->json($response);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'name'  => 'required',
            'email' => 'required',
        ]);

        $input = $request->all();

        dd($input);

        $create = User::create($input);
//            $this->usersRepository->storeUser();

        return response()->json($create);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int                      $id
     *
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'name'  => 'required',
            'email' => 'required',
        ]);

        $edit = User::find($id)->update($request->all());

        return response()->json($edit);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        User::find($id)->delete();

        return response()->json(['done']);
    }
}
